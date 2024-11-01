"use client"
import "regenerator-runtime/runtime"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
import { useEffect, useState } from "react"
import { BsFillMicFill } from "react-icons/bs"
import Loader from "@/components/Loader/Loader"
import { useRouter } from "next/navigation"
import NoMicSupport from "./Alert/NoMicSupport"
import MicNotAllowed from "./Alert/MicNotAllowed"

export default function MicrophoneIcon() {
  const router = useRouter()
  const [canSearch, setCanSearch] = useState(false)
  const [isMicrophoneGranted, setIsMicrophoneGranted] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  async function listenHandler() {
    if (isMicrophoneGranted === null) {
      // Check for microphone permission when the button is clicked
      await checkMicrophonePermission()
    }

    if (isMicrophoneGranted) {
      resetTranscript()
      console.log("started listening")
      SpeechRecognition.startListening()
      await timeout(4000)
      SpeechRecognition.stopListening()
      console.log("stopped")
      setCanSearch(true)
    } else {
      console.log("you have denied access to your microphone")
      setShowAlert(true) // Show the alert if access is denied
    }
  }

  const checkMicrophonePermission = async () => {
    if (!navigator.permissions || !navigator.permissions.query) {
      // Permissions API is not supported
      setIsMicrophoneGranted(false)
      return
    }

    try {
      const permissionStatus = await navigator.permissions.query({
        name: "microphone",
      })

      // Set true for granted, false for denied, or null for prompt or error
      setIsMicrophoneGranted(permissionStatus.state === "granted")

      // Optionally, listen for changes in permission
      permissionStatus.onchange = () => {
        setIsMicrophoneGranted(permissionStatus.state === "granted")
      }
    } catch (error) {
      console.error("Error checking microphone permission:", error)
      setIsMicrophoneGranted(false) // Treat errors as denied
    }
  }

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return <NoMicSupport />
    }
  }, [browserSupportsSpeechRecognition])

  useEffect(() => {
    if (canSearch) {
      if (!transcript) return
      router.push(`/search/web?searchTerm=${transcript}`)
    }
  }, [transcript, canSearch, router])

  return (
    <>
      {showAlert && <MicNotAllowed />}
      {listening ? (
        <Loader />
      ) : (
        <BsFillMicFill
          onClick={listenHandler}
          className="cursor-pointer text-lg text-gray-600 transition-all duration-200 active:scale-75"
        />
      )}
    </>
  )
}
