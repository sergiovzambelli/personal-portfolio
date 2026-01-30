import Shell from "@/components/Shell";
import { header } from "@/data/portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <Shell>
      <div className="space-y-12 animate-in fade-in duration-500">
        {/* Welcome / Header Section */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {header.title}
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Cybersecurity Analyst & Researcher. Specializing in offensive security
            assessments, secure architecture, and full-stack vulnerability
            analysis.
          </p>
        </section>

        {/* System Status Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Active Process */}
          <div className="bg-surface border border-white/5 p-6 rounded-lg space-y-4">
            <h3 className="text-primary font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-command rounded-full animate-pulse" />
              ACTIVE_PROCESS
            </h3>
            <div className="text-sm space-y-2">
              <p className="text-foreground">Researching: AD Security</p>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-command h-full rounded-full"
                  style={{ width: "65%" }}
                />
              </div>
              <p className="text-xs text-muted font-mono">Process ID: 8992</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-surface border border-white/5 p-6 rounded-lg space-y-4">
            <h3 className="text-secondary font-bold">SYSTEM_STATS</h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Uptime</span>
                <span>99.9%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Security Level</span>
                <span className="text-command">HIGH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Encryption</span>
                <span>TLS 1.3</span>
              </div>
            </div>
          </div>

          {/* Latest Log/Action */}
          <div className="bg-surface border border-white/5 p-6 rounded-lg space-y-4">
            <h3 className="text-accent font-bold">LATEST_LOG</h3>
            <div className="font-mono text-xs text-muted space-y-2">
              <p>
                <span className="text-command">[SUCCESS]</span> Deployed secure
                headers patch
              </p>
              <p>
                <span className="text-primary">[INFO]</span> Analyzing new CVE
                vectors
              </p>
              <p>
                <span className="text-accent">[WARN]</span> Failed login attempt
                (blocked)
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Hints */}
        <section className="pt-8 border-t border-white/5">
          <h2 className="text-xl font-bold mb-4 text-foreground">
            AVAILABLE_COMMANDS
          </h2>
          <div className="flex flex-wrap gap-4 font-mono">
            <Link
              href="/whoami"
              className="px-4 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 hover:border-primary transition-colors text-primary"
            >
              $ view whoami
            </Link>
            <Link
              href="/cases"
              className="px-4 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 hover:border-primary transition-colors text-primary"
            >
              $ ls /cases
            </Link>
            <Link
              href="/comm"
              className="px-4 py-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 hover:border-primary transition-colors text-primary"
            >
              $ connect --secure
            </Link>
          </div>
        </section>
      </div>
    </Shell>
  );
}
