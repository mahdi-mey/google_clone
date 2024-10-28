"use client"
import "regenerator-runtime/runtime"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
import { useEffect, useState } from "react"
import { BsFillMicFill } from "react-icons/bs"
import Loader from "@/components/Loader/Loader"
import { useRouter } from "next/navigation"

export default function MicrophoneIcon() {
  const router = useRouter()
  const [canSearch, setCanSearch] = useState(false)

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition()

  async function listenHandler() {
    resetTranscript()
    console.log("started listening")
    SpeechRecognition.startListening()
    await timeout(4000)
    SpeechRecognition.stopListening()
    console.log("stopped")
    setCanSearch(true)
  }

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      // render ui for browser does not support
    }
  }, [browserSupportsSpeechRecognition])

  useEffect(() => {
    if (canSearch) {
      if(!transcript) return
      router.push(`/search/web?searchTerm=${transcript}`)
    }
  }, [transcript, canSearch, router])

  if (!isMicrophoneAvailable) {
    //render ui component microphone not available
  }

  return (
    <>
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
