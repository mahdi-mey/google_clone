
export default function MainHeader() {
  return (
    <header className="flex items-center justify-end gap-6 px-8 py-4 text-sm">
      <a className="hover:underline underline-offset-4" href="https://mail.google.com/mail/u" target="_blank">Gmail</a>
      <a className="hover:underline underline-offset-4" href="">Images</a>
      <button className="py-3 px-7 rounded-lg bg-blue-500 text-white font-bold">Sign In</button>
    </header>
  );
}
