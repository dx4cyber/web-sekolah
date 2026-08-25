import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Send, Bot, User, RotateCcw } from "lucide-react";
import logoAsset from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { askTelkomBot, newId, QUICK_SUGGESTIONS, type BotMessage } from "@/lib/telkombot";

export const Route = createFileRoute("/chat-ai")({
  head: () => ({
    meta: [
      { title: "TelkomBot AI — Asisten Digital SMK Telkom Sidoarjo" },
      {
        name: "description",
        content:
          "Tanya jawab otomatis dengan TelkomBot AI seputar PPDB, jurusan, biaya, layanan BLUD, PKL, dan lowongan kerja alumni SMK Telkom Sidoarjo.",
      },
      { property: "og:title", content: "TelkomBot AI — Asisten Digital Sekolah" },
      {
        property: "og:description",
        content: "Asisten AI SMK Telkom Sidoarjo siap menjawab pertanyaan Anda 24/7.",
      },
    ],
  }),
  component: ChatAi,
});

const GREETING: BotMessage = {
  id: "greeting",
  role: "bot",
  text: "Selamat datang di TelkomBot AI 👋\n\nSaya asisten digital SMK Telkom Sidoarjo. Pilih salah satu pertanyaan cepat di bawah atau tulis pertanyaan Anda sendiri.",
};

function renderText(text: string) {
  return text.split("\n").map((line, i) => (
    <span key={i} className="block">
      {line.split(/\*\*(.+?)\*\*/g).map((chunk, j) =>
        j % 2 === 1 ? (
          <strong key={j} className="font-semibold">
            {chunk}
          </strong>
        ) : (
          chunk
        ),
      )}
    </span>
  ));
}

function ChatAi() {
  const [messages, setMessages] = useState<BotMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
    }, 700);
  };

  return (
    <div className="section-muted">
      <div className="mx-auto flex max-w-4xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          {/* header */}
          <div className="flex items-center gap-3 bg-charcoal px-5 py-4 text-charcoal-foreground">
            <img
              src={logoAsset}
              alt="Avatar TelkomBot AI"
              className="size-11 rounded-full bg-background object-contain p-0.5"
            />
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-base font-bold">TelkomBot AI</h1>
              <p className="text-xs text-charcoal-foreground/70">
                Asisten Digital SMK Telkom Sidoarjo · Online
              </p>
            </div>
            <Badge className="hidden border-0 bg-primary text-primary-foreground sm:inline-flex">
              24/7
            </Badge>
            <button
              aria-label="Mulai ulang obrolan"
              onClick={() => {
                setMessages([GREETING]);
                inputRef.current?.focus();
              }}
              className="inline-flex size-9 items-center justify-center rounded-full bg-charcoal-foreground/10 transition-colors hover:bg-primary"
            >
              <RotateCcw className="size-4" />
            </button>
          </div>

          {/* messages */}
          <div
            ref={scrollRef}
            className="h-[26rem] space-y-4 overflow-y-auto px-4 py-6 sm:h-[32rem] sm:px-6"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn("flex items-end gap-2.5", m.role === "user" && "flex-row-reverse")}
              >
                <span
                  className={cn(
                    "inline-flex size-9 shrink-0 items-center justify-center rounded-full",
                    m.role === "user" ? "bg-charcoal text-charcoal-foreground" : "bg-accent text-primary",
                  )}
                >
                  {m.role === "user" ? <User className="size-4" /> : <Bot className="size-4" />}
                </span>
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground",
                  )}
                >
                  {renderText(m.text)}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-end gap-2.5">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <Bot className="size-4" />
                </span>
                <div className="rounded-2xl bg-secondary px-4 py-3 text-sm text-muted-foreground">
                  TelkomBot sedang menyusun jawaban…
                </div>
              </div>
            )}
          </div>

          {/* quick suggestions */}
          <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3 sm:px-6">
            {QUICK_SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-border bg-background px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {s}
              </button>
            ))}
          </div>

          {/* composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 border-t border-border p-4 sm:px-6"
          >
            <textarea
              ref={inputRef}
              value={input}
              rows={1}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder="Tulis pertanyaan Anda tentang SMK Telkom Sidoarjo…"
              className="max-h-32 min-h-11 flex-1 resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <Button type="submit" size="icon" className="size-11 shrink-0 rounded-full">
              <Send className="size-4" />
            </Button>
          </form>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Jawaban TelkomBot AI bersifat informatif. Untuk kepastian data, hubungi humas sekolah di
          (031) 8961141.
        </p>
      </div>
    </div>
  );
}
