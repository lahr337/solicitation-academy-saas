"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export function UploadForm() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (
      e.dataTransfer.files &&
      e.dataTransfer.files[0]
    ) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (f: File) => {
    setError(null);

    if (f.type !== "application/pdf") {
      setError("File must be a PDF");
      return;
    }

    if (f.size > 40 * 1024 * 1024) {
      setError("File must be under 40MB");
      return;
    }

    setFile(f);
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);
    setProgress("Uploading PDF...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setProgress("Extracting text...");

      const response = await fetch(
        "/api/upload-solicitation",
        {
          method: "POST",
          body: formData,
        }
      );

      setProgress("AI analyzing...");

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.error || "Analysis failed"
        );
      }

      const data = await response.json();
      setProgress("Complete!");

      router.push(
        `/analysis/${data.sessionId}`
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Upload failed"
      );
      setUploading(false);
      setProgress("");
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  };

  return (
    <div
      className="grid grid-cols-[1.1fr_1fr]
                 gap-space-8"
    >
      {/* Left — Upload zone */}
      <div>
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() =>
            !file &&
            !uploading &&
            inputRef.current?.click()
          }
          className={`
            bg-primary-soft
            border-2 border-dashed
            border-primary
            p-space-8
            transition-all
            ${
              !file && !uploading
                ? "cursor-pointer hover:bg-primary-soft/70"
                : ""
            }
            ${
              dragActive
                ? "ring-2 ring-primary"
                : ""
            }
          `}
        >
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            onChange={handleChange}
            className="hidden"
          />

          {!file && !uploading && (
            <div className="text-center">
              <div
                className="text-[48px] text-primary
                           mb-space-4"
              >
                ↑
              </div>
              <h3 className="display-m text-ink mb-space-2 not-italic">
                Drop a solicitation PDF
              </h3>
              <p className="body-m text-ink-soft">
                or click to browse files ·
                up to 40 MB
              </p>
            </div>
          )}

          {file && !uploading && (
            <div>
              <p className="meta text-primary mb-space-3">
                READY TO ANALYZE
              </p>
              <div
                className="bg-card border
                           border-line p-space-4
                           mb-space-4"
              >
                <p
                  className="display-s text-ink
                             mb-space-1 not-italic"
                >
                  {file.name}
                </p>
                <p className="body-s text-ink-muted">
                  {formatSize(file.size)} · PDF
                </p>
              </div>

              <div className="flex gap-space-3">
                <button
                  onClick={handleAnalyze}
                  className="bg-primary text-white
                             px-space-6 py-space-3
                             body-m font-medium
                             hover:opacity-90
                             transition-opacity"
                >
                  ▶ Analyze solicitation
                </button>
                <button
                  onClick={() => {
                    setFile(null);
                    if (inputRef.current) {
                      inputRef.current.value = "";
                    }
                  }}
                  className="border border-line
                             px-space-6 py-space-3
                             body-m text-ink
                             hover:border-primary
                             transition-colors"
                >
                  Change file
                </button>
              </div>
            </div>
          )}

          {uploading && (
            <div className="text-center">
              <div
                className="w-12 h-12
                           border-4 border-primary-soft
                           border-t-primary
                           rounded-full
                           animate-spin
                           mx-auto mb-space-4"
              />
              <h3 className="display-m text-ink mb-space-2 not-italic">
                {progress || "Analyzing..."}
              </h3>
              <p className="body-s text-ink-muted">
                This takes 60-90 seconds. Do
                not close this page.
              </p>
            </div>
          )}
        </div>

        {error && (
          <div
            className="mt-space-4 bg-rust-soft
                       border-l-2 border-rust
                       p-space-4"
          >
            <p className="meta text-rust mb-1">
              ERROR
            </p>
            <p className="body-s text-ink-soft">
              {error}
            </p>
          </div>
        )}
      </div>

      {/* Right — What you get */}
      <div>
        <p className="meta text-ink-muted mb-space-4">
          WHAT YOU'LL GET BACK
        </p>
        <div className="space-y-space-4">
          {[
            {
              title: "14-tab breakdown",
              help: "Every section of the solicitation analyzed and explained",
            },
            {
              title: "Should-you-bid recommendation",
              help: "AI analysis of whether this is worth your time",
            },
            {
              title: "Packaging code decoder",
              help: "Every MIL-STD-2073-1 code explained with costs",
            },
            {
              title: "Procurement history analysis",
              help: "Past winning prices and pricing strategy",
            },
            {
              title: "Compliance checklist",
              help: "TAA, Berry, CMMC requirements explained",
            },
            {
              title: "Contextual AI Tutor",
              help: "Ask questions about your specific solicitation",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-space-3"
            >
              <div
                className="w-5 h-5 rounded-full
                           bg-primary-soft
                           flex-shrink-0
                           flex items-center
                           justify-center
                           mt-1"
              >
                <span className="text-primary text-xs">
                  ✓
                </span>
              </div>
              <div>
                <p className="display-s text-ink mb-1 not-italic font-medium">
                  {item.title}
                </p>
                <p className="body-m text-ink-soft">
                  {item.help}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}