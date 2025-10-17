import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jannat Khan",
  initials: "JK",
  url: "https://jannatkhan.xyz",
  location: "Bareilly, India",
  locationLink: "https://www.google.com/maps/place/bareilly",
  description:
    "Gen AI Developer | GSoC 2025 @ Rocket.Chat | Building production-grade AI-powered solutions.",
  summary:
    "Product-focused data driven AI Engineer with hands-on experience contributing to large-scale open-source projects & building production-grade web apps. Strong foundation in data analytics, business intelligence & EPD Ops with expertise in TypeScript & Python. [Selected for GSoC 2025](/#work) with [Rocket.Chat](https://rocket.chat), actively building AI-powered solutions and scalable systems. [Solved 200+ algorithm problems](/#profiles) across competitive coding platforms.",
  avatarUrl: "/me.png",
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "Next.js",
    "FastAPI",
    "Flask",
    "Rocket.Chat Apps SDK",
    "LangChain",
    "LangGraph",
    "PostgreSQL",
    "MySQL",
    "DuckDB",
    "Docker",
    "Kubernetes",
    "n8n",
    "Tableau",
    "PowerBI",
    "Redis",
    "Kafka",
    "OAuth2",
    "RAG",
    "Vector Search",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jannatkhandev@gmail.com",
    tel: "N/A",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/jannat-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/jannat-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/jannat-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/jannat-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Google Summer of Code (Rocket.Chat)",
      href: "https://rocket.chat",
      badges: ["GSoC 2025"],
      location: "Remote",
      title: "Mentee / Contributor",
      logoUrl: "/rocketchat.png",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "Designed and implemented Code Review Agent, an AI-powered reviewer recommendation system that automates reviewer assignments for pull requests using OpenAI-compatible providers and repository signals. Built the app end-to-end in TypeScript on Rocket.Chat Apps Engine with OAuth2 flows, REST API integrations, background job processing, and modular AI provider adapters. Integrated repository signals (file diffs, commit history, maintainers list, CODEOWNERS) to generate reviewer candidate rankings.",
    },
    {
      company: "Rocket.Chat",
      href: "https://rocket.chat",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/rocketchat.png",
      start: "2024",
      end: "Present",
      description:
        "Migrated multiple Rocket.Chat apps from legacy Apps Engine to the latest SDK and fuselage components, improving reliability and reducing app initialization time by 40%. Authored documentation, upgrade guides, and tests to ease future migrations and onboard external contributors.",
    },
  ],
  education: [
    {
      school: "Mahatma Jyotiba Phule Rohilkhand University",
      href: "https://www.mjpru.ac.in/",
      degree: "Bachelor of Science in Mathematics",
      logoUrl: "/mjpru.webp",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Fotofi - AI Photo Sharing via QR & Face Recognition",
      href: "https://fotofi.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Privacy-aware event photo delivery app where guests retrieve photos using QR + selfie flow. Features facial embedding generation, face matching, guest media collection, RSVP, and digital invites. 99.9% face recognition accuracy.",
      technologies: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "InsightFace",
        "Docker",
        "Face Embeddings",
        "AI/ML",
      ],
      links: [
        {
          type: "Website",
          href: "https://fotofi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Agent Chat - Custom AI Agents Platform",
      href: "https://chat-with-agents.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Create & Chat with custom AI agents/GPTs. Built with Vercel AI SDK, frontend powered by ShadCN components and data by Supabase. Enables users to build and interact with specialized AI assistants.",
      technologies: [
        "Next.js",
        "Vercel AI SDK",
        "Supabase",
        "ShadCN UI",
        "TypeScript",
        "Generative AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chat-with-agents.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TxtPaste - Secure Text Sharing",
      href: "https://txtpaste-app.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Secure tool for sharing code and text with privacy-focused features including encryption, password protection, and custom URL slugs.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "TypeScript",
        "Encryption",
      ],
      links: [
        {
          type: "Website",
          href: "https://txtpaste-app.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "LangChain Chat with Your Data",
      dates: "Aug 2025",
      location: "DeepLearning.AI",
      description:
        "Completed certification in building RAG applications using LangChain for document retrieval and question answering systems.",
      image: "",
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/",
        },
      ],
    },
    {
      title: "Long-Term Agentic Memory With LangGraph",
      dates: "Aug 2025",
      location: "DeepLearning.AI",
      description:
        "Completed certification focusing on building agents with persistent memory using LangGraph for advanced AI applications.",
      image: "",
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.deeplearning.ai/",
        },
      ],
    },
    {
      title: "MCP: Build Rich-Context AI Apps with Anthropic",
      dates: "Aug 2025",
      location: "DeepLearning.AI",
      description:
        "Completed certification in Model Context Protocol (MCP) for building context-aware AI applications with Anthropic's models.",
      image: "",
      links: [
        {
          title: "Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.deeplearning.ai/",
        },
      ],
    },
  ],
} as const;
