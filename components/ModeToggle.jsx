"use client";

import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import themes from "@/lib/themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export function ModeToggle({ setTheme }) {
  const [color, setColor] = useState("zinc");
  const [mode, setMode] = useState(true);
  useEffect(() => {
    setTheme(mode ? `theme-${color}` : `dark-theme-${color}`);
  }, [mode, color, setTheme]);

  const handleMode = () => {
    setMode(!mode);
  };
  const colors = [
    "zinc",
    "slate",
    "stone",
    "gray",
    "neutral",
    "violet",
    "blue",
    "green",
    "yellow",
    "red",
    "rose",
    "orange",
  ];
  return (
    <div className="flex gap-4 justify-center items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Palette />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {colors.map((color) => (
            <DropdownMenuItem key={color} onClick={() => setColor(color)}>
              {color}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="outline" size="icon" onClick={handleMode}>
        {mode ? (
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
        )}
      </Button>
    </div>
  );
}
