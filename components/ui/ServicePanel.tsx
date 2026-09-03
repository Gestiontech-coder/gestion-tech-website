import Image, { type StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";

export function ServicePanel({
  icon: Icon,
  image,
  index,
  title,
  description,
  metric,
}: {
  icon: LucideIcon;
  image: StaticImageData;
  index: string;
  title: string;
  description: string;
  metric: string;
}) {
  return (
    <div className="group relative flex h-full flex-col bg-paper-0 transition-shadow hover:shadow-[inset_0_0_0_1px_var(--brand-500)]">
      <div className="relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            placeholder="blur"
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute right-3 top-3 rounded-full bg-navy-950/70 px-2 py-1 font-mono text-[11px] text-paper-0 backdrop-blur">
            {index}
          </span>
        </div>
        <span className="absolute -bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper-0 text-navy-900 shadow-sm">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-7 pt-8">
        <h3 className="text-lg font-semibold tracking-tight text-ink-900">
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed text-ink-700">
          {description}
        </p>
        <div className="mt-auto border-t border-line pt-4 font-mono text-xs text-brand-500">
          {metric}
        </div>
      </div>
    </div>
  );
}
