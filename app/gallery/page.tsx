import Image from "next/image";
import { createClient } from "pexels";
import OpImage from "../components/OpImage";
import PaginationControls from "./Pagination";

interface Photo {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  photographer: string;
  photographerUrl: string;
}

interface GalleryProps {
  searchParams: {
    page?: string;
    per_page?: string;
  };
}

const PHOTOS_PER_PAGE = 25;

async function fetchPhotos(
  page: number = 1,
  perPage: number = PHOTOS_PER_PAGE
) {
  try {
    const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY || "");

    const response = await client.photos.search({
      query: "ai generated art",
      page: page,
      per_page: perPage,
    });

    if ("error" in response) {
      throw new Error(response.error);
    }

    const formattedPhotos: Photo[] = response.photos.map((photo) => ({
      id: photo.id,
      title: photo.alt || "Untitled",
      description: photo.alt || "No description available",
      image: photo.src.large2x,
      tags: ["Abstract", "Digital", "Art"],
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
    }));

    return {
      photos: formattedPhotos,
      totalResults: response.total_results,
      page: response.page,
      perPage: response.per_page,
    };
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
}

export default async function GalleryPage({ searchParams }: GalleryProps) {
  const currentPage = Number(searchParams.page) || 1;
  const perPage = Number(searchParams.per_page) || PHOTOS_PER_PAGE;

  try {
    const data = await fetchPhotos(currentPage, perPage);
    const { photos, totalResults, page } = data;

    const totalPages = Math.ceil(totalResults / perPage);
    const hasNextPage = currentPage < totalPages;
    const hasPrevPage = currentPage > 1;

    return (
      <>
        {totalPages ? (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-12">
            Page {page} of {totalPages} • {totalResults.toLocaleString()} total
            images
          </p>
        ) : (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-12">
            No images found
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative aspect-square">
                <OpImage
                  src={photo.image}
                  className="object-cover h-full"
                  alt={photo.title}
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {photo.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                  {photo.description}
                </p>
                <a
                  href={photo.photographerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  Photo by {photo.photographer}
                </a>
              </div>
            </div>
          ))}
        </div>

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
        />
      </>
    );
  } catch (error) {
    console.error("Error loading gallery:", error);
    return (
      <div className="text-center m-auto h-full min-h-96  flex flex-col justify-center items-center">
        <p className="text-red-500 mb-4">
          Error loading gallery:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </p>
      </div>
    );
  }
}
