import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jannat Khan",
  initials: "DV",
  url: "https://jannatkhan.xyz",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/rampur",
  description:
    "Math Nerd turned Programmer. I love building things and helping people.",
  summary:
    "My interest in programming started when in my 11th grade I opted for Computer Science, [I enrolled myself in Bachelor of Mathematics degree](/#education), [started learning to code and contributed to world's largest open source communications platform](https://www.github.com/RocketChat), and [I am active on online code judge contests as well](/#profiles).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C++",
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
      company: "Rocket.Chat",
      href: "https://rocket.chat",
      badges: [],
      location: "Remote",
      title: "Open Source Contributer",
      logoUrl: "/rocketchat.png",
      start: "Mar 2024",
      end: "Present",
      description:
        "Migrated several RC apps from obsolete apps engine to latest version, which led to 40% faster app boot time.",
    },
    {
      company: "Hacktoberfest",
      badges: [],
      href: "https://hacktoberfest.com",
      location: "Remote",
      title: "Open Source Contributer",
      logoUrl: "/hacktoberfest.png",
      start: "October 2023",
      end: "October 2023",
      description:
        "Contributed to cal repository and fixed a bug.",
    },
  ],
  education: [
    {
      school: "MJPRU",
      href: "https://www.mjpru.ac.in/",
      degree: "Bachelor of Mathematics",
      logoUrl: "/mjpru.webp",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Travelify AI",
      href: "https://travelify-ai-tool.vercel.app",
      dates: "Sep 2024 - Sep 2024",
      active: true,
      description:
        "Helps user to create and share personalized itineraries powered by AI.",
      technologies: [
        "Next.js",
        "Javascript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://travelify-ai-tool.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jannatkhandev/travelify-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/NeJv3FZ.png",
      video:
        "",
    },
    {
      title: "InfiDrive",
      href: "https://infidrive.net",
      dates: "June 2024 - Present",
      active: true,
      description:
        "A file re-sharer website that uses public APIs to download files.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://infidrive.net",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.imgur.com/dJD5uTl.png",
      video: "",
    },
  ],
  hackathons: [
  ],
} as const;
