"use client";
import React from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SquarePlus } from "lucide-react";

const CreateProject = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"sm"} className="flex items-center gap-2">
            Create Project <SquarePlus size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-[500px] max-w-[80vw] rounded-md">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Project Name</Label>
              <Input id="name" placeholder="Enter project name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="url">Project URL</Label>
              <Input id="url" placeholder="Enter project URL" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Project Description</Label>
              <Textarea
                id="description"
                placeholder="Enter project description"
              />
            </div>
          </form>
          <DialogFooter>
            {/* <Button variant="outline" className="mr-auto">
              Cancel
            </Button> */}
            <Button type="submit">Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProject;
