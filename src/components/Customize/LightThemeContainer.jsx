export default function LightThemeContainer() {
  return (
    <div className="flex flex-grow flex-col">
      <div className="">
        <h1 className="my-2.5 text-lg text-white">Theme</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-7">
          <div className="h-14 w-32 bg-green-300"></div>
          <div className="h-14 w-32 bg-green-300"></div>
          <div className="h-14 w-32 bg-green-300"></div>
          <div className="h-14 w-32 bg-green-300"></div>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="my-2.5 text-lg text-white">Background Image</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-7">
          <div className="h-14 w-32 bg-cyan-300"></div>
          <div className="h-14 w-32 bg-cyan-300"></div>
          <div className="h-14 w-32 bg-cyan-300"></div>
          <div className="h-14 w-32 bg-cyan-300"></div>
        </div>
      </div>
    </div>
  )
}
