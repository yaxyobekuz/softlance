import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-20">
      <Link href="/about" className="text-blue-400">
        Biz haqimizda
      </Link>
    </div>
  );
}
