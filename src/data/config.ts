export const portfolioConfig = {
  personal: {
    name: "Sahil Pavaskar",
    title: "Application Security Engineer",
    subtitle: "Specializing in Secure Software Development, Penetration Testing, & CI/CD Pipeline Security",
    email: "sahilpavaskar81@gmail.com",
    phone: "+1 9497434914",
    location: "San Francisco Bay Area",
    github: "https://github.com/SahilPavaskar",
    linkedin: "https://www.linkedin.com/in/sahil-pavaskar-325b851b0",
    resumeDownloadUrl: "resume.pdf", 
  },
  about: {
    summary: "I am a dedicated Application Security Engineer with a strong foundation in secure software development, vulnerability management, and automated security testing. Currently pursuing my M.S. in Computer Science at California State University East Bay. I specialize in identifying software vulnerabilities, building secure CI/CD pipelines, and integrating automated threat detection to ensure the secure delivery of critical applications.",
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
      category: "Security Operations",
      items: ["Incident Response", "Security Monitoring", "Alert Triage", "Phishing Investigation", "Log Analysis", "Malware & Sandbox Analysis"],
    },
    {
      category: "Microsoft Security",
      items: ["Microsoft Defender", "Microsoft 365 Security", "Azure AD / Entra ID", "Conditional Access", "MFA", "Intune"],
    },
    {
      category: "Vulnerability Management",
      items: ["Vulnerability Scanning", "Risk Prioritization", "Remediation Tracking", "Patch Validation"],
    },
    {
      category: "Infrastructure & Platforms",
      items: ["Active Directory", "Windows & Linux", "Endpoint Protection", "Cloud Security (AWS & Azure)", "Terraform"],
    },
    {
      category: "Tools",
      items: ["Nmap", "Nessus", "Burp Suite", "BloodHound", "Kali Linux", "Metasploit", "Wireshark", "Gobuster", "Dirsearch", "Hydra", "Netcat", "Nikto"],
    }
  ],
  experience: [
    {
      role: "Information Security Analyst",
      company: "Dzero Security Solutions Pvt Ltd, India",
      date: "Sep 2023 - Aug 2024",
      bullets: [
        "Performed internal vulnerability assessments against Windows and Linux hosts by enumerating live systems and exposed services with Nmap, validating Nessus findings manually before escalating confirmed issues.",
        "Tested web applications in Burp Suite for authentication, session management, access control, and input validation flaws; reproduced issues such as IDOR, reflected XSS, weak password policy, and missing security headers.",
        "Reviewed firewall rules, open ports, and segmentation between user, server, and administrative networks to identify unnecessary access paths and weak boundary controls.",
        "Wrote remediation-focused findings with clear reproduction steps, affected assets, business impact, and retest notes, then worked with engineers to confirm fixes after changes were deployed."
      ]
    },
    {
      role: "Information Security Analyst Intern",
      company: "BKC Jumbo Health Center",
      date: "Feb 2021 - Aug 2021",
      bullets: [
        "Assessed AWS, Azure, and GCP resources for common security gaps, including overly permissive IAM roles, publicly exposed storage, weak security group rules, and missing logging on critical services.",
        "Used CIS Benchmarks, NIST guidance, and OWASP principles to review cloud and infrastructure configurations, then translated technical issues into prioritized remediation items for engineering teams.",
        "Supported purple team and adversary simulation activities by mapping attack paths in Active Directory with BloodHound and documenting privilege escalation and lateral movement opportunities in lab or test environments."
      ]
    }
  ],
  projects: [
    {
      title: "AWS GuardDuty Automated Incident Response Pipeline",
      date: "Mar 2026",
      description: "Built an automated AWS incident response pipeline using GuardDuty, EventBridge, Lambda, SNS, and EC2.",
      bullets: [
        "Automated alerting and remediation for high-severity findings by sending notifications and stopping affected EC2 instances.",
        "Provisioned the full cloud security workflow with Terraform and implemented response logic in Python-based Lambda."
      ],
      link: "https://github.com/SahilPavaskar/aws-guardduty-ir-lab"
    },
    {
      title: "Microsoft SOC & Incident Response Lab",
      date: "Jan 2025",
      description: "Built and operated a Microsoft-first SOC lab using Microsoft Defender, Microsoft 365 Security, and Azure AD / Entra ID.",
      bullets: [
        "Performed incident response investigations for simulated phishing attacks, suspicious sign-ins, and endpoint alerts.",
        "Conducted vulnerability assessments, risk prioritization, and remediation validation, documenting incident workflows."
      ],
      link: "https://github.com/SahilPavaskar"
    },
    {
      title: "Enterprise Vulnerability Management Lab",
      date: "Oct 2024",
      description: "Comprehensive vulnerability management lab covering scanning, analysis, and remediation.",
      bullets: [
        "Ran automated vulnerability scans, analyzed findings, and prioritized risk based on severity and exposure.",
        "Validated remediation through patching and configuration hardening, confirming closure via re-scans.",
        "Built monitoring dashboards to track security alerts, vulnerability trends, and overall risk posture."
      ],
      link: "https://github.com/SahilPavaskar"
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
