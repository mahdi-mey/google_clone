import MainForm from "@/components/HomePage/MainForm"
import MainLogo from "@/components/HomePage/MainLogo"
import ShortcutsContainer from "../Shortcuts/ShortuctsContainer"

export default function GoogleSearch() {
  return (
    <main className="flex flex-col items-center">
      <MainLogo />
      <MainForm />
      <ShortcutsContainer />
    </main>
  )
}
