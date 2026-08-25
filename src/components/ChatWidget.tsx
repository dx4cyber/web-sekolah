import { useEffect, useRef, useState } from "react";
import { Send, X, MessageCircle, Bot } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { askTelkomBot, newId, QUICK_SUGGESTIONS, type BotMessage } from "@/lib/telkombot";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<BotMessage[]>([
    {
      id: newId(),
      role: "bot",
      text: "Halo! 👋 Saya TelkomBot AI. Tanyakan apa saja seputar SMK Telkom Sidoarjo — PPDB, jurusan, biaya, BLUD, atau BKK.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value || typing) return;
    setMessages((prev) => [...prev, { id: newId(), role: "user", text: value }]);
    setInput("");
    setTyping(true);
    const answer = askTelkomBot(value);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: newId(), role: "bot", text: answer }]);
      setTyping(false);
      inputRef.current?.focus();
    }, 650);
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open && (
        <div className="flex h-[30rem] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3 bg-charcoal px-4 py-3 text-charcoal-foreground">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary">
              <Bot className="size-5 text-primary-foreground" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">TelkomBot AI</p>
              <p className="text-[11px] text-charcoal-foreground/70">Asisten digital sekolah</p>
            </div>
            <button aria-label="Tutup chat" onClick={() => setOpen(false)}>
              <X className="size-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground",
                  )}
                >
                  {m.text.replace(/\*\*/g, "")}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-secondary px-3.5 py-2.5 text-sm text-muted-foreground">
                  Sedang mengetik…
                </div>
              </div>
            )}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_SUGGESTIONS.slice(0, 3).map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-border px-3 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pertanyaan…"
              className="h-10 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none focus:border-primary"
            />
            <Button type="submit" size="icon" className="size-10 shrink-0 rounded-full">
              <Send className="size-4" />
            </Button>
          </form>
          <Link
            to="/chat-ai"
            className="border-t border-border py-2 text-center text-xs font-medium text-primary hover:underline"
          >
            Buka mode layar penuh
          </Link>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)] transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" />
        {open ? "Tutup" : "Chat AI"}
      </button>
    </div>
  );
}
