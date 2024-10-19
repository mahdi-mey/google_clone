import Image from "next/image";

export default function MainLogo() {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
      alt="Google Logo"
      width={300}
      height={100}
    />
  );
}
