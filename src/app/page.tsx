import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WrapperPage } from "@/components/wrapper/wrapper-page";
import { PROJECTS, SKILLS, TWITTER } from "@/constant";
import { ArrowUpRight, Github, Globe, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const projects = PROJECTS;
  const skills = SKILLS;

  return (
    <WrapperPage classNameSection="pt-32">
      {/* Hero Section */}
      <section className="flex">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-8 leading-none">
            Full-Stack
            <br />
            <span className="text-muted-foreground">Developer</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Building the future of web with modern technologies and Web3
            integration. Specialized in creating scalable applications from
            concept to deployment.
          </p>
          <div className="flex gap-4">
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base rounded-full"
            >
              <Link href={TWITTER} target="_blank">
                Get in touch
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="px-8 py-6 text-base rounded-full hover:bg-gray-50"
            >
              <Link href="#work">View work</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/timberj.jpg"
            alt="Profile image"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 bg-gray-50 rounded-md">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-light mb-4">Selected Work</h2>
            <p className="text-gray-600 text-lg">
              Projects that define my journey in tech
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project) => (
              <Card
                key={project.name}
                className="group p-8 border-0 shadow-none hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-medium">{project.name}</h3>
                      <Badge variant="outline" className="text-xs font-mono">
                        {project.year}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="text-sm text-gray-500 font-mono">
                      {project.type}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full"
                      >
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.twitter && (
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full"
                      >
                        <Link href={project.twitter} target="_blank">
                          <Twitter className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.website && (
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full"
                      >
                        <Link href={project.website} target="_blank">
                          <Globe className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light mb-8">About</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a full-stack developer passionate about building
                  exceptional digital experiences. My expertise spans from
                  frontend interfaces to backend architecture.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, staying active with sports, or enjoying my daily
                  dose of coffee (6 cups and counting).
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Button key={skill} variant="outline">
                    {skill}
                  </Button>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-medium mb-6">Connect</h3>
                <div className="flex gap-4">
                  <Button className="gap-0 rounded-full py-0 ps-0">
                    <div className="flex aspect-square h-full p-1.5">
                      <Image
                        className="h-auto w-full rounded-full"
                        src="/timberj.jpg"
                        alt="Profile image"
                        width={24}
                        height={24}
                        aria-hidden="true"
                      />
                    </div>
                    @0xTimberJ
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href="https://github.com/0xTimberJ" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 mb-20 px-6 bg-foreground text-white rounded-md"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-8">Let&apos;s work together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your
            ideas to life.
          </p>
          <Button
            asChild
            className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-base rounded-full"
          >
            <Link href="mailto:timberj@proton.me" target="_blank">
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
            </Link>
          </Button>
        </div>
      </section>
    </WrapperPage>
  );
}
