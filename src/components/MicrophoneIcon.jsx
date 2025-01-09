"use client"
import "regenerator-runtime/runtime"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
import { useEffect, useState } from "react"
import { BsFillMicFill } from "react-icons/bs"
import Loader from "@/components/Loader/Loader"
import { useRouter } from "next/navigation"
import MicNotAllowed from "./Alert/MicNotAllowed"
import { createPortal } from "react-dom"

export default function MicrophoneIcon() {
  const router = useRouter()
  const [canSearch, setCanSearch] = useState(false)
  const [isMicrophoneGranted, setIsMicrophoneGranted] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const { transcript, listening, resetTranscript } = useSpeechRecognition()

  async function listenHandler() {
    // if (isMicrophoneGranted === null) {
    //   await checkMicrophonePermission()
    // }

    // if (isMicrophoneGranted) {
    //   resetTranscript()
    //   console.log("started listening")
      SpeechRecognition.startListening()
      await timeout(4000)
      SpeechRecognition.stopListening()
      console.log("stopped")
      setCanSearch(true)
    // } else {
    //   console.log("you have denied access to your microphone")
    //   setShowAlert(true)
    // }
  }

  const checkMicrophonePermission = async () => {
    console.log("inside check mic persmision")
    // if (!navigator.permissions || !navigator.permissions.query) {
    //   setIsMicrophoneGranted(false)
    //   return
    // }

    // try {
    //   const permissionStatus = await navigator.permissions.query({
    //     name: "microphone",
    //   })
    //   setIsMicrophoneGranted(permissionStatus.state === "granted")

    //   permissionStatus.onchange = () => {
    //     setIsMicrophoneGranted(permissionStatus.state === "granted")
    //   }
    // } catch (error) {
    //   console.error("Error checking microphone permission:", error)
    //   setIsMicrophoneGranted(false)
    // }
  }

  useEffect(() => {
    if (canSearch && transcript) {
      router.push(`/search/web?searchTerm=${transcript}`)
    }
  }, [transcript, canSearch, router])

  return (
    <>
      {showAlert && createPortal(<MicNotAllowed />, document.body)}
      {listening ? (
        <Loader />
      ) : (
        <BsFillMicFill
          onClick={listenHandler}
          className="cursor-pointer text-lg text-gray-600 text-lightText transition-all duration-200 active:scale-75"
        />
      )}
    </>
  )
}
