import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";
import { Download } from "lucide-react";
import ResumePdfViewer from "@/components/resume-pdf-viewer";

export const metadata: Metadata = {
  title: "Resume",
  description: "Vishal Sharma — Resume",
  openGraph: {
    title: "Resume",
    description: "Vishal Sharma — Resume",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume",
    description: "Vishal Sharma — Resume",
  },
};

const RESUME_PDF = "/Vishal_resume.pdf";
const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <section id="blog" className="flex flex-col gap-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
          <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
          <a
            href={RESUME_PDF}
            download="Vishal_resume.pdf"
            className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-fit"
          >
            <Download className="size-4" aria-hidden />
            Download PDF
          </a>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="w-full border border-border rounded-xl bg-muted/30 min-h-[70vh] p-4 overflow-auto">
          <ResumePdfViewer file={RESUME_PDF} />
        </div>
      </BlurFade>
    </section>
  );
}
