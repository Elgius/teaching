"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Video, CheckCircle, List } from "lucide-react";
import Link from "next/link";

export default function CourseVideoPage() {
  const [progress, setProgress] = React.useState(33);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(70), 1000);
    return () => clearTimeout(timer);
  }, []);

  const avatarPNG =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <BookOpen className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-green-600">
            Simitha Learning
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Portal
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            My Courses
          </Link>
          <Link href="#">
            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
              <img
                className="rounded-full"
                src={avatarPNG}
                alt="Profile image"
                width={40}
                height={40}
                aria-hidden="true"
              />
            </Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Introduction to Algebra!</h1>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Course Video"
                  allowFullScreen
                ></iframe>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Course Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={progress} className="w-full" />
                  <p className="text-sm text-gray-500 mt-2">
                    You&apos;ve completed {progress}% of this course
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Video Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    In this video, i will introduce you to some key concepts in
                    Algebra. We will sit together and see what the different
                    ways these concepts are applied and how they can be used in
                    your day to day
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    <Clock className="mr-2 h-4 w-4 text-green-600" />
                    <span className="text-black">Duration: 45 minutes</span>
                    <Video className="ml-4 mr-2 h-4 w-4 text-green-600" />
                    <span className="text-black">Lesson 1 of 24</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Video Timestamps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      { time: "00:00", title: "Introduction" },
                      { time: "02:15", title: "What is Algebra" },
                      { time: "15:30", title: "How to study it" },
                      { time: "28:45", title: "Real world application 1" },
                      { time: "40:00", title: "Where to go from here on?" },
                    ].map((timestamp, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Button
                          variant="link"
                          className="p-0 h-auto font-normal hover:animate-bounce text-green-600"
                        >
                          {timestamp.time}
                        </Button>
                        <span className="ml-2">{timestamp.title}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    Take your notes here and find it on your portal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Take notes here..."
                    className="min-h-[200px]"
                  />
                  <Button className="w-full mt-4">Save Notes</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Additional Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      {
                        title: "Core topics in Agebra",
                        icon: <List className="h-4 w-4 mr-2" />,
                      },
                      {
                        title: "My recommended algebra playlist on youtube",
                        icon: <List className="h-4 w-4 mr-2" />,
                      },
                      {
                        title: "Khan academy quizes",
                        icon: <CheckCircle className="h-4 w-4 mr-2" />,
                      },
                    ].map((resource, index) => (
                      <li key={index}>
                        <Button
                          variant="link"
                          className="p-0 h-auto font-normal flex items-center"
                        >
                          {resource.icon}
                          {resource.title}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">
          © 2024 Simitha Learning. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
