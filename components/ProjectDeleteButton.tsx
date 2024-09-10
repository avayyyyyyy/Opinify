"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader } from "lucide-react";
import { deleteProject } from "@/app/actions/deleteProject";
import { useRouter } from "next/navigation";

export default function DeleteProjectButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    const data = await deleteProject(id);
    // // console.log("Delete Data: ", data);
    if (data.success) {
      setLoading(false);
      router.refresh();
    } else {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Project</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this project? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {loading ? (
            <Button disabled variant="destructive">
              <Loader className="animate-spin" size={16} />
            </Button>
          ) : (
            <Button onClick={handleDelete} variant="destructive">
              Delete
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
