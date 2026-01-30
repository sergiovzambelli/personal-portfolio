import { Project } from "@/data/portfolio";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

interface CaseFileProps {
    project: Project;
}

const CaseFile: React.FC<CaseFileProps> = ({ project }) => {
    return (
        <div className="border border-white/10 bg-surface/50 rounded-lg p-6 hover:border-primary/50 transition-colors duration-300 group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    CASE_{project.id.toUpperCase()}
                </h3>
                <span
                    className={`px-2 py-1 text-xs font-mono rounded border ${project.type === "investigation"
                            ? "border-accent text-accent"
                            : project.type === "defense"
                                ? "border-command text-command"
                                : "border-secondary text-secondary"
                        }`}
                >
                    TYPE: {project.type.toUpperCase()}
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                    <span className="text-muted block text-xs font-mono mb-1">TARGET</span>
                    <p className="text-foreground">{project.target}</p>
                </div>
                <div>
                    <span className="text-muted block text-xs font-mono mb-1">METHODOLOGY</span>
                    <p className="text-foreground">{project.methodology}</p>
                </div>
            </div>

            <div className="mb-6">
                <span className="text-muted block text-xs font-mono mb-1">FINDINGS</span>
                <p className="text-foreground/90">{project.findings}</p>
            </div>

            <div className="mb-6">
                <span className="text-muted block text-xs font-mono mb-1">DESCRIPTION</span>
                <p className="text-muted">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-white/5 text-muted rounded font-mono"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                {project.sourceCode && (
                    <Link
                        href={project.sourceCode}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                    >
                        <GitHubIcon fontSize="small" />
                        <span>View Source</span>
                    </Link>
                )}
                {project.livePreview && project.livePreview !== "#" && (
                    <Link
                        href={project.livePreview}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                    >
                        <LaunchIcon fontSize="small" />
                        <span>Live Access</span>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CaseFile;
