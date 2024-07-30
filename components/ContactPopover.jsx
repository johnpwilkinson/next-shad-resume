"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CopyIcon, GlobeIcon } from "@radix-ui/react-icons";
import { SquareArrowUpRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { contactInfo } from "@/lib/constants";

export default function ContactPopover({ icon, actionUrl, copyUrl, details }) {
  return (
    <Popover className="">
      <PopoverTrigger asChild className="flex justify-center w-fit h-fit">
        <Button className="font-bold">Contact Me</Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit grid grid-cols-2 gap-4 ">
        {contactInfo.map((info, index) => (
          <div key={index}>
            <a href={info.actionUrl} target="_blank" rel="noopener noreferrer">
              {info.icon}
            </a>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
