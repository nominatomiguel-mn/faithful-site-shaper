export function RainbowDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto h-1.5 w-24 rounded-full gradient-rainbow ${className}`} />
  );
}
