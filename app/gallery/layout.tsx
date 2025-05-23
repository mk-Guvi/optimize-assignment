import React, { Suspense } from "react";
import Loading from "./loading";
import BaseLayout from "../components/layout/BaseLayout";

type Props = {
  children: React.ReactNode;
};

function GalleryLayout({ children }: Props) {
  return (
    <BaseLayout>
      <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
        Explore our collection of AI-generated artwork
      </p>
      <section className="flex-1 h-full w-full">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </section>
    </BaseLayout>
  );
}

export default GalleryLayout;
