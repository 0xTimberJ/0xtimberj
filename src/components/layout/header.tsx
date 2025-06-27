import Link from "next/link";

const links = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto">
        <div className="w-[90%] mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="text-sm font-medium">
            0xTimberJ
          </Link>
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
