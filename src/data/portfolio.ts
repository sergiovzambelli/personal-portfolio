export type ProjectType = "investigation" | "tool" | "defense";

export interface Project {
    id: string;
    name: string;
    type: ProjectType;
    target: string;
    description: string;
    methodology: string; // How it was analyzed/built
    findings: string;    // What was learned
    stack: string[];
    sourceCode?: string;
    livePreview?: string;
}

export const header = {
    homepage: "/",
    title: "SVZ.SEC",
};

export const about = {
    name: "Sergio Vittorio Zambelli",
    role: "Cybersecurity Analyst & Researcher",
    description:
        "Transitioning from Full-Stack Development to Cybersecurity. My background in software engineering gives me a deep understanding of the attack surface in modern web applications.",
    resume: "https://www.linkedin.com/in/sergio-vittorio-zambelli-b87227221/",
    social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
    },
};

export const projects: Project[] = [
    {
        id: "unsw-nb15-intrusion-detection",
        name: "Network Intrusion Detection Pipeline",
        type: "investigation",
        target: "UNSW-NB15 Network Traffic Dataset",
        description:
            "An end-to-end machine learning pipeline for detecting network intrusions, built with a focus on preprocessing rigor, feature selection, and handling class imbalance. This project demonstrates that in security, a model is only as good as its data pipeline.",
        methodology: "Statistical Analysis, Feature Engineering, SMOTE, Cross-Validation",
        findings: "Validated that ML can support but not replace defense systems. Highlighted the trade-offs between accuracy, false positives, and interpretability essential for real-world SOC operations.",
        stack: ["Python", "Scikit-learn", "Pandas", "SMOTE", "XGBoost"],
        sourceCode: "https://github.com/sergiovzambelli/unsw-nb15-intrusion-detection",
    },
    {
        id: "clearview-ai-gdpr",
        name: "Clearview AI: A GDPR Threat Model",
        type: "investigation",
        target: "Clearview AI Facial Recognition System",
        description:
            "A privacy-focused threat model analysis of Clearview AI's data practices against the GDPR framework. This case study moves beyond technical exploits to analyze how a system can fail legally, ethically, and architecturally.",
        methodology: "Threat Modeling, Legal Framework Analysis, Data Flow Mapping",
        findings: "Identified violations of data minimization and transparency. Demonstrated how 'working as designed' can still constitute a systemic failure of privacy principles.",
        stack: ["GDPR", "Threat Modeling", "Privacy Engineering", "Legal Analysis"],
        sourceCode: "https://github.com/sergiovzambelli/clearview-ai-gdpr-case-study",
    },
    {
        id: "valve-security-management",
        name: "Valve: Security Governance Analysis",
        type: "defense",
        target: "Valve Corporation Security Posture",
        description:
            "An analysis of security management models in a large-scale software organization. This study examines how flat organizational structures, like Valve's, impact security culture, incident response, and overall attack surface.",
        methodology: "Organizational Analysis, Center of Excellence Framework, Maturity Modeling",
        findings: "Demonstrated that security is a continuous organizational process. Showed how governance decisions directly influence the real-world attack surface, not just the technical one.",
        stack: ["Security Governance", "Risk Management", "Organizational Security"],
        sourceCode: "https://github.com/sergiovzambelli/valve-security-management-case-study",
    },
    {
        id: "scraper-reddit",
        name: "Controlled Reddit Data Acquisition",
        type: "tool",
        target: "Reddit Public API",
        description:
            "A rule-respecting data acquisition tool for Reddit. Before attempting to extract data, the tool was designed to first understand and operate within the platform's rate limits and API policies—a model for responsible automation.",
        methodology: "API Interaction, Rate Limit Handling, Ethical Automation",
        findings: "Proved that effective reconnaissance means understanding a system's rules before probing its boundaries. A demonstration of controlled interaction over forced extraction.",
        stack: ["Python", "REST API", "Rate Limiting", "Automation"],
        sourceCode: "https://github.com/sergiovzambelli/scraper-reddit-free-plan",
    },
];

export const skills = [
    { name: "Web Security", level: "Advanced", tools: ["OWASP Top 10", "Burp Suite", "XSS/SQLi"] },
    { name: "Network Analysis", level: "Intermediate", tools: ["Wireshark", "Nmap", "TCP/IP"] },
    { name: "Full Stack Dev", level: "Expert", tools: ["Next.js", "React", "Node.js", "TypeScript"] },
    { name: "Scripting", level: "Advanced", tools: ["Python", "Bash", "Automation"] },
];

export const contact = {
    email: "sergiovzambelli@gmail.com",
};
