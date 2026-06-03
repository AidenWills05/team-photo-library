import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#5c4d3a]/15 bg-[#fffaf2]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold tracking-tight text-[#26231f]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f0df] text-[#3f6446]">
            ◐
          </span>
          Team Media Hub
        </Link>

        <nav className="flex items-center gap-5 text-sm text-[#746d63]">
          <Link href="/" className="transition hover:text-[#26231f]">
            Home
          </Link>
          <Link href="/collections/all-photos" className="transition hover:text-[#26231f]">
            Photos
          </Link>
          <Link href="/how-to-use" className="transition hover:text-[#26231f]">
            How to Use
          </Link>
        </nav>
      </div>
    </header>
  );
}