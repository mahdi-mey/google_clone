'use client'
import "regenerator-runtime/runtime"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
import { useEffect, useState } from "react"

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      setIsReady(true) // Set ready to true if browser supports
    }
  }, [browserSupportsSpeechRecognition])

  if (!isReady) {
    return (
      <div>
        <h1>Dictaphone</h1>
        <span>Checking for browser support...</span>
      </div>
    )
  }

  if (!browserSupportsSpeechRecognition) {
    return (
      <div>
        <h1>Dictaphone</h1>
        <span>Browser does not support speech recognition.</span>
      </div>
    )
  }

  return (
    <div>
      <h1>Dictaphone</h1>
      <p>Microphone: {listening ? "On" : "Off"}</p>
      <div>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
      <p>{transcript || "Your transcriptions will appear here."}</p>
    </div>
  )
}

export default Dictaphone
