import { cn } from "@/lib/utils";

interface WrapperPageProps {
  children: React.ReactNode;
  classNameMain?: string;
  classNameSection?: string;
}

export const WrapperPage = ({
  children,
  classNameMain,
  classNameSection,
}: WrapperPageProps) => {
  return (
    <main className={cn("max-w-7xl mx-auto pt-20 min-h-screen", classNameMain)}>
      <section
        className={cn("w-[90%] mx-auto flex flex-col gap-10", classNameSection)}
      >
        {children}
      </section>
    </main>
  );
};
