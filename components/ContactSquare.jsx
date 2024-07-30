import ContactPopover from "./ContactPopover";
import { contactInfo } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Crosshair2Icon, GlobeIcon } from "@radix-ui/react-icons";
export default function ContactSquare() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Contact</CardTitle>
        <CardDescription>Get in touch with me</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex  flex-col  gap-4 justify-between">
          <div className="flex  gap-4">
            {contactInfo.slice(0, 4).map((info, index) => (
              <ContactPopover key={index} {...info} />
            ))}
          </div>
          <div className="flex lg:flex-col gap-4">
            {contactInfo.slice(4).map((info, index) => (
              <ContactPopover key={index} {...info} />
            ))}
          </div>
        </div>
        {/* <div className="flex lg:flex-col mt-2 space-y-2">
          <div className="flex gap-4  lg:justify-between lg:items-center">
            <Crosshair2Icon className="w-8 h-8" />
            <span>46032 IN USA</span>
          </div>
          <div className="flex gap-4  lg:justify-between lg:items-center">
            <GlobeIcon className="w-8 h-8" />
            <span>Remote EST</span>
          </div>
        </div> */}
      </CardContent>
    </Card>
  );
}
