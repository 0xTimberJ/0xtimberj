import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto">
        <div className="w-[90%] mx-auto py-4 flex justify-between items-center">
          <div className="text-sm font-medium">0xTimberJ</div>
          <div className="flex gap-6">
            <Link
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
