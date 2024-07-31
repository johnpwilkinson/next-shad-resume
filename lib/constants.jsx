"use client";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBitcoin,
  SiEthereum,
  SiApple,
  SiExpress,
  SiDocker,
  SiFigma,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiGmail,
  SiSolidity,
  SiHtml5,
  SiCss3,
  SiOpenzeppelin,
  SiEthers,
  SiReacthookform,
  SiGit,
  SiJest,
  SiWeb3dotjs,
  SiShadcnui,
  SiPostgresql,
  SiTelegram,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import ExperienceCard from "@/components/ExperienceCard";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import ContactPopover from "@/components/ContactPopover";

const experience = [
  {
    organization: "FutureWonder",
    title: "Full Stack Developer",
    time: "October 2021 - current",
    description: [
      "Excelled in remote Agile environment, adeptly handling React, blockchain, UI/UX, and various development tasks with adaptability and precision.",
      "Developed React components & unit tests in conjunction with SQL, Solidity & hardhat to build a high frequency decentralized futures exchange that communicated via FIX and REST APIs.",
      "Led DeFi and blockchain research team, producing actionable reports, fostering key industry connections, and driving business development.",
      "Streamlined UI/UX collaboration with Figma, approving designs, crafting user stories, and providing web3 expertise for efficient agile sprints.",
    ],
  },
  {
    organization: "Kenzie Academy",
    title: "Associate Instructor",
    time: "December 2019 - October 2021",
    description: [
      "Served as an assistant instructor for Python/Django, simplifying complex technical concepts and establishing rapport with students",
      "Provided consultation to cohorts in brainstorming, development, and troubleshooting of capstone projects, fostering an environment conducive to learning and growth.",
    ],
  },
  {
    organization: "Wireless Industry",
    title: "Sales & Management",
    time: "December 2006 - December 2019",
    description: [
      "Consistently led in monthly sales performance across multiple wireless provider for over a decade.",
      "Built lasting customer relationships through personalized solutions and on demand customer service.",
      "Managed retail sales team to exceed monthly sales and customer service goals.",
    ],
  },
];

const education = [
  {
    organization: "Purdue Global",
    title: "Bachelors: IT/Software Development",
    time: "2023 - 2024",
  },
  {
    organization: "Kenzie Academy",
    title: "Certification: Full StackSoftware Engineering",
    time: "2019 - 2020",
  },
  {
    organization: "Ivy Tech",
    title: "Associates: Accounting",
    time: "2018 - 2019",
  },
  {
    organization: "GitCoin",
    title: "Fellowship: Blockchain Development",
    time: "2020",
  },
];

export const contactInfo = [
  {
    icon: <SiGmail className="w-8 h-8 " />,
    actionUrl: "mailto:johnpwilkinson627@gmail.com",
    copyUrl: "johnpwilkinson627@gmail.com",
  },
  {
    icon: <SiTelegram className="w-8 h-8" />,
    actionUrl: "https://t.me/jpwjs",
    copyUrl: "@jpwjs",
  },
  {
    icon: <SiGithub className="w-8 h-8" />,
    actionUrl: "https://github.com/johnpwilkinson",
    copyUrl: "github.com/johnpwilkinson",
  },
  {
    icon: <LinkedInLogoIcon className="w-8 h-8" />,
    actionUrl: "https://www.linkedin.com/in/john-wilkinson-dev/",
    copyUrl: "linkedin.com/in/john-wilkinson-dev/",
  },
];

export const cvData = {
  aboutMe: {
    title: "About Me",
    content: (
      <p>
        Full-stack developer with a background in sales and management, always
        curious and team-oriented. Proficient in technical skills while
        maintaining strong communication abilities honed from a sales
        background. Research-minded and analytical, I excel in collaborative
        remote and agile environments, committed to contributing and learning
        within the team for long-term growth and success.
      </p>
    ),
  },
  contactInfo: {
    title: "Contact",
    content: (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
          {contactInfo.map((info, index) => (
            <ContactPopover key={index} {...info} />
          ))}
        </div>
      </div>
    ),
  },
  skills: {
    title: "Skills",
    content: (
      <div className="flex flex-wrap gap-4 justify-between ">
        <SiJavascript className="w-10 h-10" />
        <SiReact className="w-10 h-10" />
        <SiNextdotjs className="w-10 h-10" />
        <SiTailwindcss className="w-10 h-10" />
        <SiBitcoin className="w-10 h-10" />
        <SiEthereum className="w-10 h-10" />
        <SiApple className="w-10 h-10" />
        <SiExpress className="w-10 h-10" />
        <SiDocker className="w-10 h-10" />
        <SiFigma className="w-10 h-10" />
        <SiNodedotjs className="w-10 h-10" />
        <SiPython className="w-10 h-10" />
        <SiDjango className="w-10 h-10" />
        <SiSolidity className="w-10 h-10" />
        <SiHtml5 className="w-10 h-10" />
        <SiCss3 className="w-10 h-10" />
        <SiEthers className="w-10 h-10" />
        <SiOpenzeppelin className="w-10 h-10" />
        <SiGit className="w-10 h-10" />
        <SiReacthookform className="w-10 h-10" />
        <SiJest className="w-10 h-10" />
        <SiPostgresql className="w-10 h-10" />
        <SiWeb3dotjs className="w-10 h-10" />
        <SiShadcnui className="w-10 h-10" />
      </div>
    ),
  },
  professionalExperience: {
    title: "Professional Experience",
    content: (
      <div className="flex flex-wrap gap-4">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    ),
  },
  educationExperience: {
    title: "Education",
    content: (
      <div className="flex flex-col gap-4">
        {education.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    ),
  },
};
