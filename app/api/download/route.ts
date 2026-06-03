import { NextRequest } from "next/server";

function getSafeFileName(url: string, fallback = "photo.jpg") {
  try {
    const pathname = new URL(url).pathname;
    const fileName = pathname.split("/").pop();

    if (!fileName) return fallback;

    return decodeURIComponent(fileName).replace(/[^a-zA-Z0-9._-]/g, "-");
  } catch {
    return fallback;
  }
}

export async function GET(request: NextRequest) {
  const photoUrl = request.nextUrl.searchParams.get("url");

  if (!photoUrl) {
    return new Response("Missing photo URL", { status: 400 });
  }

  const parsedUrl = new URL(photoUrl);

  const allowedHosts = ["ik.imagekit.io", "placehold.co"];

  if (!allowedHosts.includes(parsedUrl.hostname)) {
    return new Response("Photo host is not allowed", { status: 403 });
  }

  const imageResponse = await fetch(photoUrl);

  if (!imageResponse.ok) {
    return new Response("Could not fetch photo", { status: 500 });
  }

  const contentType =
    imageResponse.headers.get("content-type") || "application/octet-stream";

  const fileName = getSafeFileName(photoUrl);

  const imageBuffer = await imageResponse.arrayBuffer();

  return new Response(imageBuffer, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "public, max-age=300",
    },
  });
}