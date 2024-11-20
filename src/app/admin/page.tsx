"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { BookOpen, Settings, LogOut, Menu, Bell } from "lucide-react";

import Sidebar from "@/components/dash/sidebar";
// import Dashboard from "@/components/dash/mainDash/dashboard";
import CourseList from "@/components/dash/courses/courseList";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
          <div className="flex items-center flex-shrink-0 px-4">
            <BookOpen className="w-8 h-8 text-green-600" />
            <span className="ml-2 text-xl font-semibold">EduHub Admin</span>
          </div>
          {/* Sidebar component */}
          <Sidebar />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navbar */}
        <header className="flex items-center justify-between px-4 py-4 bg-white border-b lg:px-6">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open sidebar</span>
          </Button>
          <div className="flex items-center">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full sm:w-64"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:animate-pulse">
              <Bell className="h-5 w-5" />
              <span className="sr-only">View notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="User avatar"
                    className="rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Admin User
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      admin@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-4 py-6">
            {/* <Dashboard /> */}
            <CourseList />
          </div>
        </main>
      </div>
    </div>
  );
}
