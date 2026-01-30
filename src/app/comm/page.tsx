import Shell from "@/components/Shell";
import { contact } from "@/data/portfolio";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function Comm() {
    return (
        <Shell>
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <header className="border-b border-white/10 pb-6">
                    <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                        <span className="text-command text-4xl">●</span> SECURE_UPLINK
                    </h1>
                    <p className="text-muted mt-2 font-mono">
                        /dev/ttyS0: connection established. encrypted channel active.
                    </p>
                </header>

                <section className="bg-surface/50 border border-white/10 rounded p-8 space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <EmailIcon />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground">Direct Message</h3>
                            <p className="text-muted text-sm mb-2">
                                Standard communication channel. Response time: &lt; 24h.
                            </p>
                            <a
                                href={`mailto:${contact.email}`}
                                className="text-primary hover:text-accent transition-colors font-mono break-all"
                            >
                                {contact.email}
                            </a>
                        </div>
                    </div>

                    {/* <div className="flex items-start gap-4 pt-6 border-t border-white/5">
                        <div className="p-3 bg-accent/10 rounded-full text-accent">
                            <LockIcon />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-foreground">PGP Public Key</h3>
                            <p className="text-muted text-sm mb-3">
                                Use this key for encrypted communication.
                            </p>
                            <div className="bg-black/50 p-4 rounded border border-white/5 overflow-x-auto">
                                <pre className="text-xs text-muted font-mono whitespace-pre-wrap">
                                    {`-----BEGIN PGP PUBLIC KEY BLOCK-----
mQINBGB... [KEY_ID_PLACEHOLDER] ...
...
-----END PGP PUBLIC KEY BLOCK-----`}
                                </pre>
                            </div>
                            <p className="text-xs text-muted mt-2">
                                *Key ID ends in F4A1. Verification required.*
                            </p>
                        </div>
                    </div> */}
                </section>

                <section className="text-center pt-8">
                    <p className="text-muted text-sm font-mono animate-pulse">
                        _waiting for input...
                    </p>
                </section>
            </div>
        </Shell>
    );
}
