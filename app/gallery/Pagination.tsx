"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
}: PaginationControlsProps) {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = React.useState(false);

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `?${params.toString()}`;
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center mt-12 space-x-2">
        
      {/* Previous Button */}
      <Link
        href={createPageUrl(currentPage - 1)}
        className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
          hasPrevPage
            ? "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
            : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
        }`}
        aria-disabled={!hasPrevPage}
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </Link>

      {/* Page Numbers */}
      <div className="hidden sm:flex items-center space-x-1">
        {getVisiblePages().map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`dots-${index}`}
                className="px-3 py-2 text-gray-500 dark:text-gray-400"
              >
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <Link
              key={pageNumber}
              href={createPageUrl(pageNumber)}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
              }`}
            >
              {pageNumber}
            </Link>
          );
        })}
      </div>

      {/* Mobile Page Indicator */}
      <div className="sm:hidden bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm">
        <span className="text-gray-700 dark:text-gray-300">
          {currentPage} of {totalPages}
        </span>
      </div>

      {/* Next Button */}
      <Link
        href={createPageUrl(currentPage + 1)}
        onClick={() => setIsLoading(true)}
        className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
          hasNextPage
            ? "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm"
            : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
        }`}
        aria-disabled={!hasNextPage}
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
}