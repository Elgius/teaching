"use client";

import {
  BarChart,
  BookOpen,
  DollarSign,
  // Settings,
  Users,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLink = ({
    href,
    icon: Icon,
    children,
  }: {
    href: string;
    icon: React.ElementType;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 group"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <Icon className="w-6 h-6 mr-3 text-gray-500" />
      {children}
    </Link>
  );

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      <nav
        className={`
        flex-1 bg-white
        fixed top-0 left-0 bottom-0 z-40
        w-64 transform transition-transform duration-200 ease-in-out
        md:relative md:translate-x-0
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        {/* TODO:settings will be in a future update */}
        <div className="flex flex-col h-full">
          <div className="flex-1 px-2 mt-5 space-y-1 overflow-y-auto">
            <NavLink href="#" icon={BarChart}>
              Dashboard
            </NavLink>
            <NavLink href="#" icon={BookOpen}>
              Courses
            </NavLink>
            <NavLink href="#" icon={Users}>
              Students
            </NavLink>
            <NavLink href="#" icon={DollarSign}>
              Revenue
            </NavLink>
            {/* <NavLink href="#" icon={Settings}>
              Settings
            </NavLink> */}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

{
  /* <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer> */
}
