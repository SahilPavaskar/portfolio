export const portfolioConfig = {
  personal: {
    name: "Sahil Pavaskar",
    title: "Security Software Engineer",
    subtitle: "Building AppSec, AI security, cloud IAM, and incident-response automation for modern engineering teams",
    email: "sahilpavaskar81@gmail.com",
    phone: "+1 949-743-4914",
    location: "San Francisco Bay Area",
    github: "https://github.com/SahilPavaskar",
    linkedin: "https://www.linkedin.com/in/sahil-pavaskar-325b851b0",
    resumeDownloadUrl: "resume.pdf", 
  },
  about: {
    summary: "I am a security software engineer with 2+ years of experience across vulnerability discovery, threat modeling, secure SDLC, and cloud security automation. My recent work focuses on turning noisy security signals into practical engineering workflows: AI-assisted code review, IAM attack-path analysis, GuardDuty response automation, SAST tuning, and policy-as-code controls for AWS, Kubernetes, and CI/CD environments.",
  },
  education: [
    {
      degree: "M.S. Computer Science",
      institution: "California State University East Bay, San Francisco",
      date: "Expected May 2026",
      gpa: "3.8 GPA",
      courses: ["Cybersecurity", "Operating Systems", "Cloud Computing", "Networking", "Data Structures & Algorithms"],
    },
    {
      degree: "B.S. Computer Engineering",
      institution: "University of Mumbai, MH, India",
      date: "June 2024",
      gpa: "8.7 CGPA",
      courses: ["Python Programming", "Digital Forensics", "System Architecture", "Security & Risk Management"],
    }
  ],
  skills: [
    {
      category: "Application Security",
      items: ["Threat Modeling", "Secure Code Review", "OWASP Top 10", "API Security", "Vulnerability Research", "Bug Bounty"],
    },
    {
      category: "AI & LLM Security",
      items: ["Prompt Injection", "LLM Audit Workflows", "Gemini API", "OpenAI API", "LangChain", "OWASP LLM Top 10"],
    },
    {
      category: "Cloud & Identity",
      items: ["AWS IAM", "GuardDuty", "Lambda", "EventBridge", "OAuth 2.0", "OIDC", "SAML", "JWT"],
    },
    {
      category: "DevSecOps & Infrastructure",
      items: ["Terraform", "Docker", "Kubernetes", "GitHub Actions", "SAST/DAST", "Semgrep", "Bandit"],
    },
    {
      category: "Languages & Systems",
      items: ["Python", "Java", "Go", "TypeScript", "JavaScript", "Bash", "FastAPI", "React"],
    }
  ],
  experience: [
    {
      role: "Security Software Engineer",
      company: "Deven Infotech Pvt Ltd",
      date: "Sep 2022 - Aug 2024",
      bullets: [
        "Partnered with engineering teams on STRIDE threat modeling and security design reviews for microservices, catching authentication, API, and cryptographic risks before implementation.",
        "Built custom Python and Java security tooling for GitHub Actions CI/CD to detect exposed secrets, insecure dependencies, and code-level vulnerabilities earlier in the SDLC.",
        "Tuned SAST workflows with Bandit, Semgrep, and AI-assisted triage, reducing false positives by 40% and improving developer adoption of secure coding guidance.",
        "Analyzed internal web applications for authentication bypass, SSRF, injection, access-control, and session-management issues; created proof-of-concept exploits and retested fixes with developers."
      ]
    },
    {
      role: "Cloud Security Engineering Intern",
      company: "BKC Health Center",
      date: "Feb 2021 - Aug 2021",
      bullets: [
        "Implemented Terraform-based controls for hybrid-cloud environments, including IAM least privilege, network security groups, TLS configuration, and hardened Docker/Kubernetes deployments.",
        "Automated cloud vulnerability discovery with Python scanners, reducing manual assessment time by 30% across internal infrastructure and containerized services.",
        "Reviewed AWS, Azure, and GCP configurations for overly permissive IAM, exposed storage, weak security groups, and missing logging; translated findings into prioritized remediation work.",
        "Triaged security alerts across pod security, DNS, and network exposures, improving remediation flow with cloud operations teams."
      ]
    }
  ],
  projects: [
    {
      title: "Cloud Identity Attack Path Analyzer",
      date: "May 2026",
      description: "Built an offline security engineering tool that finds risky AWS IAM and OAuth/OIDC configurations, then explains how they can become attack paths.",
      bullets: [
        "Detects overly permissive IAM policies, privilege-escalation permissions, sts:AssumeRole paths, broad GitHub Actions OIDC trusts, and risky OAuth client settings.",
        "Generates human-readable reports, machine-readable JSON findings, and Mermaid attack graphs for CI-friendly identity risk review."
      ],
      link: "https://github.com/SahilPavaskar/cloud-identity-attack-path-analyzer"
    },
    {
      title: "AWS GuardDuty Automated Incident Response Pipeline",
      date: "Mar 2026",
      description: "Built a hands-on AWS cloud security lab that detects suspicious GuardDuty findings and responds through an event-driven workflow.",
      bullets: [
        "Routes GuardDuty findings through EventBridge into a Python Lambda response function that alerts through SNS and can stop affected EC2 instances above a severity threshold.",
        "Provisioned the workflow with Terraform and designed least-privilege IAM permissions for CloudWatch logging, SNS publishing, EC2 inspection, and optional remediation."
      ],
      link: "https://github.com/SahilPavaskar/aws-guardduty-ir-lab"
    },
    {
      title: "AI-Powered Code Security Reviewer",
      date: "2026",
      description: "Built a CLI workflow that combines Python static analysis with LLM-assisted auditing to surface actionable AppSec findings in pull-request workflows.",
      bullets: [
        "Combines Bandit and Semgrep findings with Gemini-powered context review to identify injection, insecure dependency, secret exposure, and unsafe AI-integration patterns.",
        "Produces developer-facing remediation guidance and CI/CD output designed to reduce scanner noise without dropping important vulnerabilities."
      ],
      link: "https://github.com/SahilPavaskar"
    },
    {
      title: "Agentic AI Security Gateway",
      date: "2026",
      description: "Designed a FastAPI security gateway for LLM and agentic AI applications that evaluates prompt injection, sensitive-data exposure, and risky tool calls before execution.",
      bullets: [
        "Uses YAML policy rules for model risk tiers, data classification, tool allow/deny decisions, and audit evidence for AI governance reviews.",
        "Includes an attack corpus, regression tests, and dashboard concepts for blocked prompts, matched policy, risk score, and remediation context."
      ]
    }
  ],
  certifications: [
    { name: "OSCP+", date: "Expected June 2026" },
    { name: "AWS Solutions Architect Associate", date: "April 2026", link: "https://www.credly.com/badges/b5bb204b-a30f-4813-900f-90a25e6c3851/public_url" },
    { name: "CompTIA Security+", date: "Feb 2025", link: "https://www.credly.com/badges/cd333c54-6e3a-4c07-a4ee-b424282e4e81/public_url" }
  ],
  publications: [
    { 
      title: "Green Cover Identification and Hotspot Analysis", 
      conference: "ICACTA 2023", 
      date: "Oct 2023", 
      authors: "S. Pavaskar et al.",
      link: "https://ieeexplore.ieee.org/document/10393436"
    }
  ]
};
