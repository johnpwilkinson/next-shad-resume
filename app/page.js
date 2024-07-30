"use client";
import ContactSquare from "@/components/ContactSquare";
import CvCard from "@/components/CvCard";
import { cvData } from "@/lib/constants";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-4 ">
        <CvCard
          title={cvData.aboutMe.title}
          content={cvData.aboutMe.content}
          className={"order-2 lg:order-1 w-fit"}
        />
      </div>
      <div className="flex w-full my-4">
        <CvCard
          title={cvData.skills.title}
          content={cvData.skills.content}
          className={"w-full"}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <CvCard
          title={cvData.professionalExperience.title}
          content={cvData.professionalExperience.content}
          className="w-full"
        />
        <CvCard
          title={cvData.educationExperience.title}
          content={cvData.educationExperience.content}
          className="w-full lg:w-fit"
        />
      </div>
    </main>
  );
}
