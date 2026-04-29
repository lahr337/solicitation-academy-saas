"use client";

import { useState, useRef, useEffect } from "react";
import type { Analysis } from "@/lib/analysis-engine";

interface AnalysisTutorProps {
  sessionId: string;
  solicitationNumber: string;
  currentTab: string;
  analysis: Analysis;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function AnalysisTutor({
  sessionId,
  solicitationNumber,
  currentTab,
  analysis,
}: AnalysisTutorProps) {
  const [messages, setMessages] = useState<
    Message[]
  >([
    {
      role: "assistant",
      content: `I've analyzed ${solicitationNumber}. Ask me anything about this specific solicitation — what to check, whether to bid, pricing strategy, or details about any section.`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const send = async (question: string) => {
    if (!question.trim() || loading) return;

    const userMsg: Message = {
      role: "user",
      content: question,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/analysis-tutor",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            question,
            sessionId,
            currentTab,
          }),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(
          err.error || "Failed"
        );
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Error: ${
            error instanceof Error
              ? error.message
              : "Unknown"
          }`,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside
      className="w-[360px] bg-surface
                 flex flex-col h-[calc(100vh-56px)]
                 sticky top-14"
    >
      <div
        className="bg-primary-soft p-space-5
                   pb-space-4 border-b border-line"
      >
        <div className="flex items-start gap-3">
          <div
            className="w-7 h-7 rounded-full
                       bg-white flex items-center
                       justify-center"
          >
            <span className="text-primary">
              ✦
            </span>
          </div>
          <div>
            <p className="display-s text-ink not-italic font-medium">
              Analysis Tutor
            </p>
            <p className="body-s text-ink-soft">
              <span className="text-sage">
                ●
              </span>{" "}
              Knows this solicitation
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-space-5 space-y-space-4">
        {messages.map((msg, i) => (
          <div key={i}>
            <p className="meta text-ink-muted mb-2">
              {msg.role === "user"
                ? "YOU"
                : "TUTOR"}
            </p>
            <div
              className={`p-space-3 ${
                msg.role === "user"
                  ? "bg-primary-soft text-ink"
                  : "bg-card border border-line text-ink"
              }`}
            >
              <p className="body-s whitespace-pre-wrap">
                {msg.content}
              </p>
            </div>
          </div>
        ))}

        {loading && (
          <div>
            <p className="meta text-ink-muted mb-2">
              TUTOR · thinking...
            </p>
            <div className="bg-card border border-line p-space-3 flex gap-2">
              <span
                className="w-2 h-2 rounded-full bg-primary animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <span
                className="w-2 h-2 rounded-full bg-primary animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="w-2 h-2 rounded-full bg-primary animate-bounce"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        )}

        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="border-t border-line p-space-4 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Ask about this solicitation..."
          disabled={loading}
          className="flex-1 bg-card border border-line px-3 py-2 body-s focus:outline-none focus:border-primary disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-primary text-white px-3 py-2 disabled:opacity-50"
        >
          →
        </button>
      </form>
    </aside>
  );
}