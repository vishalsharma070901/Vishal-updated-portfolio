"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("@/components/pdf-viewer"), { ssr: false });

type ResumePdfViewerProps = {
  file: string;
};

export default function ResumePdfViewer({ file }: ResumePdfViewerProps) {
  return <PdfViewer file={file} />;
}
