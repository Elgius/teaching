import { BarChart, BookOpen, DollarSign, Settings, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <nav className="flex-1 px-2 mt-5 space-y-1 bg-white">
      <Link
        href="#"
        className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 group"
      >
        <BarChart className="w-6 h-6 mr-3 text-gray-500" />
        Dashboard
      </Link>
      <Link
        href="#"
        className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 group"
      >
        <BookOpen className="w-6 h-6 mr-3 text-gray-500" />
        Courses
      </Link>
      <Link
        href="#"
        className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 group"
      >
        <Users className="w-6 h-6 mr-3 text-gray-500" />
        Students
      </Link>
      <Link
        href="#"
        className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 group"
      >
        <DollarSign className="w-6 h-6 mr-3 text-gray-500" />
        Revenue
      </Link>
      <Link
        href="#"
        className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100 group"
      >
        <Settings className="w-6 h-6 mr-3 text-gray-500" />
        Settings
      </Link>
    </nav>
  );
}
