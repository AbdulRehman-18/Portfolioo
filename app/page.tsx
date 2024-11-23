import { CustomCursor } from '@/components/custom-cursor';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-background to-muted/50">
      <CustomCursor />
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <ThemeToggle />
        </nav>
        
        <div className="mt-20 grid gap-12 md:grid-cols-[1fr_2fr]">
          <Card className="relative overflow-hidden p-6">
            <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold">Abdul Rehman</h2>
              <p className="text-muted-foreground">Student developer <br />Java developer || Python developer</p>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <Button size="icon" variant="ghost" asChild>
                <a href="https://github.com/AbdulRehman-18" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://www.linkedin.com/in/abdul-rehman-350a702b9" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="mailto:abdulrehman91820@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </Card>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold">About Me</h3>
              <Separator className="my-4" />
              <p className="text-muted-foreground">
               
              Hi, I'm Abdul Rehman—a passionate developer and tech enthusiast with a keen interest in web development, app development, UI/UX design, and software engineering. I thrive on creating innovative, user-centric solutions, from crafting modern websites and mobile apps to building interactive games and AI-powered tools. My journey in technology is fueled by curiosity and a dedication to continuous learning, with hands-on experience in Java, React, Next.js, Unity, and other cutting-edge technologies. Whether it's designing seamless user interfaces or developing efficient back-end systems, I aim to bring ideas to life through creative and impactful projects.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold">Featured Projects</h3>
              <Separator className="my-4" />
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Number Guessing Game",
                    description: "A simple number guessing game built with Java",
                    image: "/proj1.jpg",
                    url: "https://github.com/AbdulRehman-18/NumberGuessingGame"
                  },
                  {
                    title: "Face Attendance System",
                    description: "A face attendance system built with Python and OpenCV",
                    image: "/proj2.jpg",
                    url: "https://github.com/AbdulRehman-18/Face-Attendance-System"
                  },
                  {
                    title: "To-do List App",
                    description: "A simple to-do list app built with HTML,CSS and JavaScript",
                    image: "/proj3.jpg",
                    url: "https://github.com/AbdulRehman-18/To-do-List-App"
                  },
                  {
                    title: "Task Management App",
                    description: "Collaborative task management tool with real-time updates",
                    image: "/comingsoon.jpg",
                    url: "https://github.com/AbdulRehman-18/Task-Manager"
                  },
                  {
                    title: "Weather Dashboard",
                    description: "Weather forecasting app using OpenWeather API and React",
                    image: "/comingsoon.jpg",
                    url: "https://github.com/AbdulRehman-18/Weather-App"
                  },
                  {
                    title: "Social Media Analytics",
                    description: "Analytics dashboard for social media metrics visualization",
                    image: "/comingsoon.jpg",
                    url: "https://github.com/AbdulRehman-18/Social-Analytics"
                  }
                ].map((project, i) => (
                  <a 
                    key={i} 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <Card className="group relative overflow-hidden p-4 transition-colors hover:bg-muted/50">
                      <div className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="mt-4 font-semibold">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </Card>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}