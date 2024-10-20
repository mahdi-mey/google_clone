import AddShortucts from "./ShortuctsContainer";
import MainForm from "./MainForm";
import MainLogo from "./MainLogo";

export default function GoogleSearch() {
  return (
    <main className="flex flex-col items-center">
      <MainLogo />
      <MainForm />
      <AddShortucts />
    </main>
  );
}
