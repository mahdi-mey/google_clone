import SearchHeader from "@/components/SearchResults/SearchHeader";

export default function layout({ children }) {
  return (
    <main className="overflow-auto">
      <SearchHeader />
      <div>{children}</div>
    </main>
  );
}
