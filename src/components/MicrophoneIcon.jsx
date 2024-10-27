"use client"
import "regenerator-runtime/runtime"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
import { useEffect, useState } from "react"
import { BsFillMicFill } from "react-icons/bs"
import FadeLoader from 'react-spinners/FadeLoader'
import Loader from "./Loader/Loader"

export default function MicrophoneIcon() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition()

  const [isListening, setIslistening] = useState(false)

  async function listenHandler() {
    console.log("started listening")
    setIslistening(true)
    SpeechRecognition.startListening()

    setTimeout(() => {
      SpeechRecognition.stopListening
      console.log("stopeed")
      console.log(transcript)
      setIslistening(false)
    }, 5000)
  }

  if (!browserSupportsSpeechRecognition) {
    console.log("no browser support")
  }

  return (
    <>
      {isListening === true ? (
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
