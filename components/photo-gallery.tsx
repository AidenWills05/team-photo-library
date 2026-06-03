import type { Photo } from "@/lib/collections";

function getDownloadHref(url: string) {
  return `/api/download?url=${encodeURIComponent(url)}`;
}

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) {
    return (
      <div className="rounded-[2rem] border border-[#5c4d3a]/15 bg-[#fffaf2]/80 px-6 py-10 text-[#746d63] backdrop-blur">
        No photos have been added yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {photos.map((photo, index) => {
        const downloadUrl = photo.downloadUrl ?? photo.src;
        const isLastOddPhoto =
          photos.length % 2 === 1 && index === photos.length - 1;

        return (
          <div
            key={`${photo.src}-${index}`}
            className={`group overflow-hidden rounded-[1.5rem] border border-[#5c4d3a]/15 bg-[#fffaf2]/85 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl sm:rounded-[1.8rem] ${
              isLastOddPhoto
                ? "col-span-2 w-[calc(50%-0.5rem)] justify-self-center sm:w-[calc(50%-0.75rem)]"
                : ""
            }`}
          >
            <a href={photo.src} target="_blank" rel="noreferrer">
              <div className="aspect-[4/3] overflow-hidden bg-[#f0dfc7]/40">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </a>

            <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
  <p className="text-xs text-[#746d63]">
    Click to open full photo
  </p>

  <a
    href={getDownloadHref(downloadUrl)}
    className="inline-flex justify-center rounded-full border border-[#5c4d3a]/20 bg-white/80 px-5 py-2 text-xs font-semibold text-[#3f6446] transition hover:scale-[1.02] hover:border-[#3f6446]/40"
  >
    Download
  </a>
</div>
          </div>
        );
      })}
    </div>
  );
}