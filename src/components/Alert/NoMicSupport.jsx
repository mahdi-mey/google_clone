import { TbMicrophoneOff } from "react-icons/tb"; 
import AlertTemplate from "./AlertTemplate"

export default function NoMicSupport() {
  return (
    <AlertTemplate
      icon={<TbMicrophoneOff className="text-[11rem] text-red-500 sm:w-64" />}
      title="Oh no!"
      buttonText="CLOSE"
      description="Your browser does not support microphone access. </br>
      Please try using a different browser."
    />
  )
}