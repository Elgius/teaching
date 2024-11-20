import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { courses } from "@/lib/data";

export default function courseList() {
  return (
    <div className="border rounded p-5">
      <Table>
        <TableCaption>Courses currently active</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Course Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.courseId}>
              <TableCell className="font-medium">{course.courseId}</TableCell>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.subject}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell className="text-right">{course.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$ NA </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
