import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CollectionCard from "@/components/collection-card";
import { getCollections } from "@/lib/collections";
import { getImageKitCoverPhoto } from "@/lib/imagekit-assets";

export const revalidate = 300;

export default async function Home() {
  const coverSrc = await getImageKitCoverPhoto();

  const collection = {
    ...getCollections()[0],
    coverSrc,
  };

  return (
    <main className="homey-page">
      <SiteHeader />

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <div>
          <p className="mb-4 inline-flex rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] homey-pill">
  Photo Hub
</p>

<h1 className="max-w-4xl text-4xl font-extrabold tracking-[-0.03em] text-[#26231f] sm:text-5xl md:text-6xl">
  Team photos, organized and easy to access
  </h1>

          

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/collections/all-photos"
              className="rounded-full px-7 py-3 text-sm font-semibold transition hover:scale-[1.02] homey-button-primary"
            >
              Browse Photos
            </Link>

            <Link
              href="/how-to-use"
              className="rounded-full px-7 py-3 text-sm font-semibold backdrop-blur transition hover:scale-[1.02] homey-button-secondary"
            >
              How to Use
            </Link>
          </div>
        </div>

        <div className="rounded-[2.2rem] p-3 homey-card">
          <CollectionCard collection={collection} />
        </div>
      </section>

      

      <SiteFooter />
    </main>
  );
}