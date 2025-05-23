import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Loading gallery...
        </p>
      </div>
    </div>
  );
}

export default Loading;
