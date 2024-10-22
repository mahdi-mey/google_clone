import SearchHeader from "@/components/SearchHeader";

export default function layout({ children }) {
  return (
    <main>
      <SearchHeader />
      <div>{children}</div>
    </main>
  );
}
