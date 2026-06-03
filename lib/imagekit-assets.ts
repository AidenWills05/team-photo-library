import type { Photo } from "@/lib/collections";

type ImageKitAsset = {
  type?: string;
  fileType?: string;
  name: string;
  url: string;
  thumbnail?: string;
  filePath?: string;
  createdAt?: string;
  updatedAt?: string;
};

function cleanTitle(fileName: string) {
  return fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

export async function getImageKitPhotos(
  folderPath = process.env.IMAGEKIT_PHOTO_FOLDER ?? "/team-photo-library/all-photos"
): Promise<Photo[]> {
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;

  if (!privateKey) {
    console.warn("Missing IMAGEKIT_PRIVATE_KEY");
    return [];
  }

  const searchParams = new URLSearchParams({
    type: "file",
    fileType: "image",
    path: folderPath,
    sort: "DESC_CREATED",
    limit: "100",
  });

  const response = await fetch(
    `https://api.imagekit.io/v1/files?${searchParams.toString()}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${privateKey}:`).toString("base64")}`,
      },
      next: {
        revalidate: 300,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`ImageKit request failed: ${response.status}`);
  }

  const files = (await response.json()) as ImageKitAsset[];

  return files
    .filter((file) => file.url)
    .map((file) => ({
      src: file.url,
      downloadUrl: file.url,
      alt: cleanTitle(file.name) || "Team photo",
      title: cleanTitle(file.name) || "Photo",
    }));
}
export async function getImageKitCoverPhoto(
  folderPath = process.env.IMAGEKIT_COVER_FOLDER ?? "/team-photo-library/album-cover"
) {
  const photos = await getImageKitPhotos(folderPath);

  return (
    photos[0]?.src ??
    "https://placehold.co/1200x800/e8edf2/111111?text=Photo+Library"
  );
}