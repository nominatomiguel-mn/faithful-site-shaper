export function DecorCircles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <span className="absolute -top-10 left-[8%] h-40 w-40 rounded-full bg-yellow/30 blur-2xl animate-float" />
      <span className="absolute top-[20%] right-[6%] h-56 w-56 rounded-full bg-green/25 blur-3xl animate-float-slow" />
      <span className="absolute bottom-[10%] left-[12%] h-48 w-48 rounded-full bg-coral/25 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <span className="absolute bottom-[5%] right-[15%] h-36 w-36 rounded-full bg-sky/30 blur-2xl animate-float-slow" style={{ animationDelay: "1s" }} />
    </div>
  );
}
