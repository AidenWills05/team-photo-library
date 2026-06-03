export type Photo = {
  src: string;
  alt: string;
  title?: string;
  downloadUrl?: string;
};

export type Collection = {
  name: string;
  slug: string;
  description: string;
  coverSrc: string;
  photos: Photo[];
};

export const collections: Collection[] = [
  {
    name: "All Photos",
    slug: "all-photos",
    description: "View and download the latest shared team images.",
    coverSrc: "https://placehold.co/1200x800/f0dfc7/26231f?text=All+Photos",
    photos: [],
  },
];

export function getCollections() {
  return collections;
}

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}