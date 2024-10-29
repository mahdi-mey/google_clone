import AlertTemplate from "./AlertTemplate"
import WifiIcon from "./WifiIcon"

export default function NoInternet() {
  return (
    <AlertTemplate
      icon={<WifiIcon className="w-44 text-red-500 sm:w-64" />}
      title="Whoops!!"
      buttonText="TRY AGAIN"
      description="No internet access detected </br>
      Please ensure you are connected to the internet."
    />
  )
}
