import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import PhotoGallery from "@/components/photo-gallery";
import { getImageKitPhotos } from "@/lib/imagekit-assets";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return [{ slug: "all-photos" }];
}

export default async function PhotoLibraryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;

  const photos = await getImageKitPhotos();

  return (
    <main className="homey-page">
      <SiteHeader />

      <section className="px-6 pb-10 pt-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-[#5c4d3a]/15 bg-[#fffaf2]/75 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#746d63] backdrop-blur transition hover:scale-[1.02] hover:text-[#26231f]"
          >
            Back Home
          </Link>

          <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.03em] text-[#26231f] sm:text-5xl md:text-6xl">
            Shared Photos
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#746d63]">
            Newest uploads appear first. Click a photo to open it in a new tab,
            or use the download button to save it.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <PhotoGallery photos={photos} />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}