"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Snowflake } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-xl border border-hyorin-border bg-hyorin-card p-6 backdrop-blur-md transition-all duration-300 hover:border-hyorin-cyan hover:shadow-ice-hover"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
      }}
    >
      <div className="absolute top-0 right-0 -mr-6 -mt-6 h-20 w-20 rounded-full bg-hyorin-cyan/10 blur-xl group-hover:bg-hyorin-cyan/20 transition-all" />

      <div className="flex items-center justify-between mb-4">
        <Snowflake className="h-5 w-5 text-hyorin-ice animate-pulse" />
        <div className="flex gap-3 text-slate-400">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-hyorin-cyan transition-colors"
            >
              <GitBranch className="h-4 w-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-hyorin-cyan transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold tracking-wide text-white group-hover:text-hyorin-cyan transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-300/80 line-clamp-3 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-hyorin-ice/30 bg-hyorin-ice/10 px-2.5 py-0.5 text-xs font-mono text-hyorin-ice"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
