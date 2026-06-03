import Link from "next/link";
import type { Collection } from "@/lib/collections";

export default function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group block overflow-hidden rounded-[1.8rem] border border-[#5c4d3a]/15 bg-[#fffaf2] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={collection.coverSrc}
          alt={collection.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#26231f]/55 via-[#26231f]/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          

          <h2 className="text-3xl font-bold tracking-tight text-white">
            {collection.name}
          </h2>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-7 text-[#746d63]">
          {collection.description}
        </p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#6f8f72]">
          Open gallery
        </p>
      </div>
    </Link>
  );
}