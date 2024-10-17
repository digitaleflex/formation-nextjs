import Link from "next/link";

export default function Home() {
  return (
    <Link href={'/learn'} className="flex-1 w-full flex flex-col justify-center">
      Learn
    </Link>

  );
}
