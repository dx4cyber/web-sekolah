import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { RotateCcw, User, Bot, Send } from "lucide-react";
import { l as logoAsset, c as cn, Q as QUICK_SUGGESTIONS, B as Button, n as newId, e as askTelkomBot } from "./router-DbQZdAmm.js";
import { B as Badge } from "./badge-cHKNlP6M.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "sonner";
const GREETING = {
  id: "greeting",
  role: "bot",
  text: "Selamat datang di TelkomBot AI 👋\n\nSaya asisten digital SMK Telkom Sidoarjo. Pilih salah satu pertanyaan cepat di bawah atau tulis pertanyaan Anda sendiri."
};
function renderText(text) {
  return text.split("\n").map((line, i) => /* @__PURE__ */ jsx("span", { className: "block", children: line.split(/\*\*(.+?)\*\*/g).map((chunk, j) => j % 2 === 1 ? /* @__PURE__ */ jsx("strong", { className: "font-semibold", children: chunk }, j) : chunk) }, i));
}
function ChatAi() {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    var _a;
    (_a = scrollRef.current) == null ? void 0 : _a.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages, typing]);
  useEffect(() => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  const send = (text) => {
    const value = text.trim();
    if (!value || typing) return;
    setMessages((prev) => [...prev, {
      id: newId(),
      role: "user",
      text: value
    }]);
    setInput("");
    setTyping(true);
    const answer = askTelkomBot(value);
    window.setTimeout(() => {
      var _a;
      setMessages((prev) => [...prev, {
        id: newId(),
        role: "bot",
        text: answer
      }]);
      setTyping(false);
      (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 700);
  };
  return /* @__PURE__ */ jsx("div", { className: "section-muted", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-4xl flex-col px-4 py-8 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-charcoal px-5 py-4 text-charcoal-foreground", children: [
        /* @__PURE__ */ jsx("img", { src: logoAsset, alt: "Avatar TelkomBot AI", className: "size-11 rounded-full bg-background object-contain p-0.5" }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-display text-base font-bold", children: "TelkomBot AI" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-charcoal-foreground/70", children: "Asisten Digital SMK Telkom Sidoarjo · Online" })
        ] }),
        /* @__PURE__ */ jsx(Badge, { className: "hidden border-0 bg-primary text-primary-foreground sm:inline-flex", children: "24/7" }),
        /* @__PURE__ */ jsx("button", { "aria-label": "Mulai ulang obrolan", onClick: () => {
          var _a;
          setMessages([GREETING]);
          (_a = inputRef.current) == null ? void 0 : _a.focus();
        }, className: "inline-flex size-9 items-center justify-center rounded-full bg-charcoal-foreground/10 transition-colors hover:bg-primary", children: /* @__PURE__ */ jsx(RotateCcw, { className: "size-4" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { ref: scrollRef, className: "h-[26rem] space-y-4 overflow-y-auto px-4 py-6 sm:h-[32rem] sm:px-6", children: [
        messages.map((m) => /* @__PURE__ */ jsxs("div", { className: cn("flex items-end gap-2.5", m.role === "user" && "flex-row-reverse"), children: [
          /* @__PURE__ */ jsx("span", { className: cn("inline-flex size-9 shrink-0 items-center justify-center rounded-full", m.role === "user" ? "bg-charcoal text-charcoal-foreground" : "bg-accent text-primary"), children: m.role === "user" ? /* @__PURE__ */ jsx(User, { className: "size-4" }) : /* @__PURE__ */ jsx(Bot, { className: "size-4" }) }),
          /* @__PURE__ */ jsx("div", { className: cn("max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed", m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"), children: renderText(m.text) })
        ] }, m.id)),
        typing && /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary", children: /* @__PURE__ */ jsx(Bot, { className: "size-4" }) }),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-secondary px-4 py-3 text-sm text-muted-foreground", children: "TelkomBot sedang menyusun jawaban…" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 border-t border-border px-4 py-3 sm:px-6", children: QUICK_SUGGESTIONS.map((s) => /* @__PURE__ */ jsx("button", { onClick: () => send(s), className: "rounded-full border border-border bg-background px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary", children: s }, s)) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        send(input);
      }, className: "flex items-end gap-2 border-t border-border p-4 sm:px-6", children: [
        /* @__PURE__ */ jsx("textarea", { ref: inputRef, value: input, rows: 1, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send(input);
          }
        }, placeholder: "Tulis pertanyaan Anda tentang SMK Telkom Sidoarjo…", className: "max-h-32 min-h-11 flex-1 resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" }),
        /* @__PURE__ */ jsx(Button, { type: "submit", size: "icon", className: "size-11 shrink-0 rounded-full", children: /* @__PURE__ */ jsx(Send, { className: "size-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-center text-xs text-muted-foreground", children: "Jawaban TelkomBot AI bersifat informatif. Untuk kepastian data, hubungi humas sekolah di (031) 8961141." })
  ] }) });
}
export {
  ChatAi as component
};
