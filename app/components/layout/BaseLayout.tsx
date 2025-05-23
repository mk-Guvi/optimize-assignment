import React from "react";

type Props = {
  children: React.ReactNode;
};

function BaseLayout({ children }: Props) {
  return (
    <div className="min-h-screen  pt-16 py-12">
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
}

export default BaseLayout;
