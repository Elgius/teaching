"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Link2, Notebook, Link, Trash2, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

function AdditionalResource() {
  const [icons, setIcons] = React.useState("");
  const [resources, setResources] = React.useState([{ title: "", url: "" }]);

  const addResource = () => {
    setResources([...resources, { title: "", url: "" }]);
  };

  const updateResource = (
    index: number,
    field: "title" | "url",
    value: string
  ) => {
    const newResources = [...resources];
    newResources[index][field] = value;
    setResources(newResources);
  };

  const removeResource = (index: number) => {
    setResources(resources.filter((_, i) => i !== index));
  };
  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Link2 className="mr-2" />
          Additional Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Icon</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>URL</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map((resource, index) => (
              <TableRow key={index}>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        <Notebook />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20 bg-white">
                      <DropdownMenuLabel>Choose your Icon</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={icons}
                        onValueChange={setIcons}
                      >
                        <DropdownMenuRadioItem value="Notebook">
                          <Notebook />
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Link">
                          <Link />
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="Resource title"
                    value={resource.title}
                    onChange={(e) =>
                      updateResource(index, "title", e.target.value)
                    }
                    aria-label={`Resource ${index + 1} title`}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="https://example.com"
                    value={resource.url}
                    onChange={(e) =>
                      updateResource(index, "url", e.target.value)
                    }
                    aria-label={`Resource ${index + 1} URL`}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeResource(index)}
                    aria-label={`Remove resource ${index + 1}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={addResource} className="mt-4">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Resource
        </Button>
      </CardContent>
    </Card>
  );
}

export default AdditionalResource;
