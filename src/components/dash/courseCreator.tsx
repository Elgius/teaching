"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PlusCircle,
  Trash2,
  Save,
  Youtube,
  Clock,
  FileText,
  Image,
} from "lucide-react";
import { Label } from "../ui/label";
import AdditionalResource from "@/components/dash/additionalResource";
export default function CourseCreatorDashboard() {
  const [youtubeLink, setYoutubeLink] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [timestamps, setTimestamps] = React.useState([{ time: "", title: "" }]);
  const addTimestamp = () => {
    setTimestamps([...timestamps, { time: "", title: "" }]);
  };

  const updateTimestamp = (
    index: number,
    field: "time" | "title",
    value: string
  ) => {
    const newTimestamps = [...timestamps];
    newTimestamps[index][field] = value;
    setTimestamps(newTimestamps);
  };

  const removeTimestamp = (index: number) => {
    setTimestamps(timestamps.filter((_, i) => i !== index));
  };

  // const handleSave = () => {
  //   console.log("Saving course data:", {
  //     youtubeLink,
  //     description,
  //     timestamps,
  //     resources,
  //   });
  // };

  return (
    // <main className=" h-fit overflow-hidden">
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Course Creator</h1>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Image className="mr-2" />
            Thumbnail image
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="picture">Insert your thumbnail image</Label>
          <Input id="thumbnail image" type="file" />
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Youtube className="mr-2" />
            YouTube Link
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Enter YouTube video URL"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            aria-label="YouTube video URL"
          />
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2" />
            Video Description
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Enter video description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            aria-label="Video description"
          />
        </CardContent>
      </Card>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2" />
            Timestamps (if applicable)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {timestamps.map((timestamp, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Input
                      placeholder="00:00"
                      value={timestamp.time}
                      onChange={(e) =>
                        updateTimestamp(index, "time", e.target.value)
                      }
                      aria-label={`Timestamp ${index + 1} time`}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      placeholder="Section title"
                      value={timestamp.title}
                      onChange={(e) =>
                        updateTimestamp(index, "title", e.target.value)
                      }
                      aria-label={`Timestamp ${index + 1} title`}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeTimestamp(index)}
                      aria-label={`Remove timestamp ${index + 1}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button onClick={addTimestamp} className="mt-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Timestamp
          </Button>
        </CardContent>
      </Card>

      <AdditionalResource />

      <Button className="w-full">
        <Save className="mr-2 h-4 w-4" /> Save create course
      </Button>
    </div>
    // </main>
  );
}
