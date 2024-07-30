import { ChevronsRightIcon } from "lucide-react";

export default function ExperienceCard({
  organization,
  title,
  time,
  description,
}) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl">{title}</h1>
      <h3 className="text-lg opacity-75">{organization}</h3>
      <p className="mb-1 opacity-50">{time}</p>
      {description && (
        <div className="flex flex-col pl-6">
          {/* Container for chevrons and description */}
          {description.map((desc, index) => (
            <div key={index} className="flex items-start mb-2">
              <div className="flex-shrink-0 mr-2">
                <ChevronsRightIcon className="w-5 h-5 text-gray-500" />
              </div>
              <p className="flex-1">{desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
