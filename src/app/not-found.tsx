import Shell from "@/components/Shell";
import Link from "next/link";

export default function NotFound() {
  return (
    <Shell>
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6 animate-in fade-in duration-500">
        <h1 className="text-6xl font-bold text-accent font-mono">404</h1>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">RESOURCE_NOT_FOUND</h2>
          <p className="text-muted text-sm font-mono">
            Error: The requested object is outside the current scope or does not exist.
          </p>
        </div>
        <div className="pt-8">
          <Link
            href="/"
            className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 transition-colors rounded font-mono"
          >
            $ return --home
          </Link>
        </div>
      </div>
    </Shell>
  );
}
