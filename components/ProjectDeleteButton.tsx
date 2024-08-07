"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9M5gohkNm66
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { deleteProject } from "@/app/actions/deleteProject";
import { toast } from "sonner";
import { useState } from "react";
import { Loader } from "lucide-react";

export default function DeleteProjectButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const data = await deleteProject(id);
    if (data.success) {
      setLoading(false);
      window.location.reload();
    } else {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Project</Button>
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
            <Button disabled variant={"destructive"}>
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
