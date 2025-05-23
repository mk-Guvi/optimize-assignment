"use client";

import { useState } from "react";
import PromptInput from "./_components/PromptInput";
import GeneratedImage from "./_components/GeneratedImage";
import BaseLayout from "../components/layout/BaseLayout";


export default function Demo() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;

    setIsGenerating(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setGeneratedImage("/11.png");
    setIsGenerating(false);
  };

  return (
    <BaseLayout>
      <h1 className="text-4xl font-bold text-center mb-8">Try MagicMoments</h1>

      <div className="max-w-2xl min-h-80 mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <PromptInput
          prompt={prompt}
          setPrompt={setPrompt}
          isGenerating={isGenerating}
          onGenerate={handleGenerate}
        />

        {generatedImage && <GeneratedImage imageUrl={generatedImage} />}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          Want to create more? Check out our{" "}
          <a href="/pricing" className="text-purple-600 hover:underline">
            pricing plans
          </a>
        </p>
      </div>
    </BaseLayout>
  );
}
