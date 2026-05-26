import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="w-full px-6 pt-8 pb-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="block">
          <Image
            src="/logo-white.png"
            alt="Forbes Health"
            width={520}
            height={120}
            className="w-64 md:w-80 lg:w-96 mx-auto"
            priority
          />
        </Link>
        <hr className="header-divider mt-4" />
      </div>
    </header>
  );
}
