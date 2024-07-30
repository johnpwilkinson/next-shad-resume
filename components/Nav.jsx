import ContactPopover from "./ContactPopover";
import { ModeToggle } from "./ModeToggle";

export default function Nav({ setTheme }) {
  return (
    <>
      <div className=" max-sm:hidden flex gap-4 items-start justify-between w-full px-4 py-8 lg:px-8">
        <div className="w-full">
          <div className="text-6xl font-bold">John Wilkinson</div>
          <div className="text-3xl text-muted-foreground">
            Full Stack Developer
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <ContactPopover />
          <ModeToggle setTheme={setTheme} />
        </div>
      </div>
      <div className="sm:hidden flex flex-col">
        <div className="flex justify-between w-full">
          <div className="text-6xl font-bold">John</div>
          <div className="flex gap-4 items-center">
            <ContactPopover />
            <ModeToggle setTheme={setTheme} />
          </div>
        </div>
        <div className="text-6xl font-bold">Wilkinson</div>
        <div className="text-3xl text-muted-foreground">
          Full Stack Developer
        </div>
      </div>
    </>
  );
}
