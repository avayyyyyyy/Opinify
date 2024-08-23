"use client";
import React, { useState } from "react";
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
import { Loader, PlusSquareIcon, SquarePlus } from "lucide-react";
import { submitProject } from "@/app/actions/createProject";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const formData = {
      name,
      url,
      description,
    };
    const data = await submitProject(formData);
    if (data.success) {
      router.push(`dashboard/feedbacks/${data.projectId}`);
      setName("");
      setUrl("");
      setDescription("");
      setLoading(false);
    } else {
      toast.error("Failed to create project 😢");
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} className="flex items-center gap-2 w-full">
          Create Project <SquarePlus size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[500px] max-w-[80vw] rounded-md">
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Project Name: </Label>
            <Input
              id="name"
              placeholder="Enter project name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="url">Project URL:</Label>
            <span className="text-[10px] text-red-600">
              URL should be unique...
            </span>
            <Input
              id="url"
              placeholder="Enter project URL: https://shubhcodes.me/"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Project Description:</Label>
            <span className="text-[10px] text-red-600">
              5 minimum characters required...
            </span>
            <Textarea
              id="description"
              placeholder="Enter project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <DialogFooter>
            {loading ? (
              <Button disabled className="w-full">
                <Loader size={16} className="animate-spin" />
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Create Project
                <PlusSquareIcon size={16} className="ml-1" />
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProject;
