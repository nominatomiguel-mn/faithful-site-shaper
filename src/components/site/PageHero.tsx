import { DecorCircles } from "./DecorCircles";
import { RainbowDivider } from "./RainbowDivider";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = "primary",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "primary" | "orange" | "green" | "sky" | "coral";
}) {
  const toneBg: Record<string, string> = {
    primary: "from-primary via-primary to-primary-deep text-white",
    orange: "from-orange to-coral text-white",
    green: "from-green to-sky text-white",
    sky: "from-sky to-primary text-white",
    coral: "from-coral to-orange text-white",
  };
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${toneBg[tone]} pt-32 pb-20 md:pt-40 md:pb-28`}>
      <DecorCircles />
      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        {eyebrow && (
          <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-extrabold leading-tight md:text-6xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">{subtitle}</p>
        )}
        <RainbowDivider className="mt-8" />
      </div>
    </section>
  );
}
