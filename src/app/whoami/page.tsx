import Shell from "@/components/Shell";
import { about, skills } from "@/data/portfolio";

export default function WhoAmI() {
    return (
        <Shell>
            <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">

                {/* Identity Header */}
                <section className="space-y-4 border-b border-white/10 pb-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">
                        USER_IDENTITY: <span className="text-foreground">sergiovz</span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
                        <div>
                            <span className="text-muted block">ROLE</span>
                            <span className="text-foreground">{about.role}</span>
                        </div>
                        <div>
                            <span className="text-muted block">CLEARANCE_LEVEL</span>
                            <span className="text-command">LEVEL_4_RESEARCHER</span>
                        </div>
                    </div>
                </section>

                {/* Narrative */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-secondary mb-4">./background_check</h2>
                    <div className="prose prose-invert max-w-none text-muted leading-relaxed">
                        <p className="text-lg text-foreground border-l-2 border-primary pl-4">
                            {about.description}
                        </p>
                        <p className="mt-4">
                            My approach to security is rooted in a deep understanding of how systems are built.
                            Having spent years architecting full-stack applications, I recognize the subtle
                            implementation gaps where vulnerabilities thrive.
                        </p>
                        <div className="mt-4">
                            Currently focusing on:
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-foreground">
                                <li>Web Application Penetration Testing</li>
                                <li>Secure Cloud Architecture</li>
                                <li>Automated Vulnerability Scanning Tools</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Capabilities / Skills */}
                <section>
                    <h2 className="text-xl font-bold text-accent mb-6">./capabilities_matrix</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill) => (
                            <div key={skill.name} className="bg-surface/50 p-4 rounded border border-white/5 hover:border-accent/30 transition-colors">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-foreground">{skill.name}</h3>
                                    <span className="text-xs text-accent font-mono">{skill.level.toUpperCase()}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skill.tools.map((tool) => (
                                        <span key={tool} className="text-xs px-2 py-1 bg-white/5 rounded text-muted font-mono">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </Shell>
    );
}
