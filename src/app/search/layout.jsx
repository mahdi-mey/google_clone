import SearchHeader from "@/components/SearchResults/SearchHeader";

export default function layout({ children }) {
  return (
    <main>
      <SearchHeader />
      <div>{children}</div>
    </main>
  );
}
