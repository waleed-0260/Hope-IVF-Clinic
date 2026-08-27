"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";
import Image from "next/image";
import type { Article } from "@/lib/constants";

type ArticleCardProps = {
  article: Article;
  index?: number;
  large?: boolean;
};

export default function ArticleCard({
  article,
  index = 0,
  large = false,
}: ArticleCardProps) {
  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={large ? 480 : 400}
          sizes={
            large
              ? "(max-width: 1024px) 100vw, 60vw"
              : "(max-width: 1024px) 100vw, 30vw"
          }
          className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
            large ? "aspect-[16/9]" : "aspect-[3/2]"
          }`}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-primary shadow">
          {article.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3
          className={`${
            large
              ? "font-display text-2xl font-bold leading-snug text-ink md:text-3xl"
              : "font-display text-xl font-bold leading-snug text-ink"
          } transition group-hover:text-primary`}
        >
          {article.title}
        </h3>
        <p
          className={`mt-3 leading-relaxed text-muted ${
            large ? "text-base" : "text-sm"
          }`}
        >
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
            <Clock3 className="h-3.5 w-3.5" /> {article.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
            Read Article <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}