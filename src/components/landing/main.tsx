import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Users, Award } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

export default function Component() {
  const avatarPNG =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      <header className="w-full px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-green-600">
            Simitha Center
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/courses"
          >
            Courses
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Resources
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>

          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Learn Without Limits
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Want to do your best in Maths and Physics? Want to achieve
                  your desired grades so that you may persue the field you
                  desire?
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-green-600 text-white hover:bg-green-700">
                  Get Started
                </Button>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose Simitha Center?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Users className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from industry professionals and experienced educators.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <BookOpen className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Diverse Courses</h3>
                <p className="text-gray-600">
                  Explore a wide range of subjects tailored to your interests.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Award className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Recognized Certificates</h3>
                <p className="text-gray-600">
                  Earn digital awards to showcase your newly acquired skills.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Learning?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Join thousands of learners already on their path to success.
                  Sign up now and get instant access to our courses.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-green-600 text-white hover:bg-green-700"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-gray-600">
                  By signing up, you agree to our{" "}
                  <Link
                    className="underline underline-offset-2 hover:text-green-600"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">
          © 2024 Simitha Center. All rights reserved.
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
