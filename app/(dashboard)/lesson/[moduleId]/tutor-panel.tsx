"use client";

import { useState, useRef, useEffect } from "react";

interface TutorPanelProps {
  moduleId: string;
  moduleName: string;
  levelName: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "Give me an example",
  "Why does this matter?",
  "Dollar impact?",
  "Common mistakes?",
];

export function TutorPanel({
  moduleId,
  moduleName,
  levelName,
}: TutorPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Welcome to ${moduleName}. Ask me anything about this lesson, DLA, DIBBS, or how it applies to your business — I'll explain in plain English.`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendQuestion = async (
    question: string
  ) => {
    if (!question.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const history = messages
        .filter((m) => m.role !== "assistant" ||
          messages.indexOf(m) > 0)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const response = await fetch(
        "/api/tutor",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            question,
            moduleId,
            conversationHistory: history,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error ||
            "Failed to get response"
        );
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.answer,
        timestamp: new Date(),
      };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);
    } catch (error) {
      const errorMessage: Message = {
        role: "assistant",
        content: `I'm sorry, I encountered an error: ${
          error instanceof Error
            ? error.message
            : "Unknown error"
        }. Please try again.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [
        ...prev,
        errorMessage,
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    sendQuestion(input);
  };

  const handleSuggestedClick = (
    question: string
  ) => {
    sendQuestion(question);
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs =
      now.getTime() - date.getTime();
    const diffMins = Math.floor(
      diffMs / 60000
    );

    if (diffMins < 1) return "just now";
    if (diffMins < 60)
      return `${diffMins}m ago`;
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <aside
      className="w-[360px] flex flex-col
                 bg-surface h-[calc(100vh-56px)]
                 sticky top-14"
    >
      {/* Rail head */}
      <div
        className="bg-primary-soft
                   p-space-5 pb-space-4
                   border-b border-line
                   flex-shrink-0"
      >
        <div className="flex items-start gap-3">
          <div
            className="w-7 h-7 rounded-full
                       bg-white flex items-center
                       justify-center
                       flex-shrink-0"
          >
            <span className="text-primary text-sm">
              ✦
            </span>
          </div>
          <div>
            <p className="display-s text-ink not-italic font-medium">
              Academy Tutor
            </p>
            <p className="body-s text-ink-soft">
              <span className="text-sage">●</span>{" "}
              Always on · knows this lesson
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto
                   p-space-5 space-y-space-4"
      >
        {messages.map((msg, i) => (
          <div key={i}>
            <p className="meta text-ink-muted mb-2">
              {msg.role === "user"
                ? "YOU"
                : "TUTOR"}{" "}
              · {formatTime(msg.timestamp)}
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
            <div
              className="bg-card border border-line
                         p-space-3 flex gap-2"
            >
              <span
                className="w-2 h-2 rounded-full
                           bg-primary animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <span
                className="w-2 h-2 rounded-full
                           bg-primary animate-bounce"
                style={{
                  animationDelay: "0.2s",
                }}
              />
              <span
                className="w-2 h-2 rounded-full
                           bg-primary animate-bounce"
                style={{
                  animationDelay: "0.4s",
                }}
              />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested chips */}
      <div
        className="px-space-5 py-space-3
                   border-t border-line
                   flex flex-wrap gap-2
                   flex-shrink-0"
      >
        {SUGGESTED_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() =>
              handleSuggestedClick(q)
            }
            disabled={loading}
            className="border border-line
                       px-3 py-1.5 body-s
                       text-ink-soft
                       hover:border-primary
                       transition-colors
                       disabled:opacity-50
                       disabled:cursor-not-allowed"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Composer */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-line
                   p-space-4 flex gap-2
                   flex-shrink-0"
      >
        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Ask anything about this lesson..."
          disabled={loading}
          className="flex-1 bg-card
                     border border-line
                     px-3 py-2 body-s
                     text-ink
                     focus:outline-none
                     focus:border-primary
                     disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={
            loading || !input.trim()
          }
          className="bg-primary text-white
                     px-3 py-2 body-s
                     hover:opacity-90
                     transition-opacity
                     disabled:opacity-50
                     disabled:cursor-not-allowed"
        >
          →
        </button>
      </form>
    </aside>
  );
}