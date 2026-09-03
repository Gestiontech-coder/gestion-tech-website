"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Solicitud de auditoría — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${email}`);
    window.location.href = `mailto:contacto@gestion-tech.cl?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contacto" className="bg-navy-950 py-24 text-paper-0">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-paper-100/75">
            {t("body")}
          </p>

          <div className="mt-10 space-y-4 border-t border-line-dark pt-6 font-mono text-sm">
            <p className="text-paper-100/60">{t("directLabel")}</p>
            <a
              href="mailto:contacto@gestion-tech.cl"
              className="flex items-center gap-2.5 text-paper-0 hover:text-signal-300"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              contacto@gestion-tech.cl
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
        <form
          onSubmit={handleSubmit}
          className="grid gap-5 border border-line-dark bg-navy-900/60 p-7"
        >
          <label className="grid gap-1.5 text-sm">
            <span className="font-mono text-xs text-paper-100/60">
              {t("nameLabel")}
            </span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("namePlaceholder")}
              className="border-b border-line-dark bg-transparent py-2 text-paper-0 outline-none placeholder:text-paper-100/30 focus:border-signal-400"
            />
          </label>

          <label className="grid gap-1.5 text-sm">
            <span className="font-mono text-xs text-paper-100/60">
              {t("emailLabel")}
            </span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              className="border-b border-line-dark bg-transparent py-2 text-paper-0 outline-none placeholder:text-paper-100/30 focus:border-signal-400"
            />
          </label>

          <label className="grid gap-1.5 text-sm">
            <span className="font-mono text-xs text-paper-100/60">
              {t("messageLabel")}
            </span>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("messagePlaceholder")}
              className="resize-none border-b border-line-dark bg-transparent py-2 text-paper-0 outline-none placeholder:text-paper-100/30 focus:border-signal-400"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-signal-400 px-5 py-3 text-sm font-medium text-navy-950 transition-colors hover:bg-signal-300"
          >
            {t("submit")}
          </button>
        </form>
        </Reveal>
      </div>
    </section>
  );
}
