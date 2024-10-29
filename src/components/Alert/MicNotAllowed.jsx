import { TbMicrophone2Off } from "react-icons/tb"; 
import AlertTemplate from "./AlertTemplate"

export default function MicNotAllowed() {
  return (
    <AlertTemplate
      icon={<TbMicrophone2Off className="text-[11rem] text-red-500 sm:w-64" />}
      title="Oh no!"
      buttonText="CLOSE"
      description="You have denied access to the microphone. </br> Please grant permission to continue."
    />
  )
}
