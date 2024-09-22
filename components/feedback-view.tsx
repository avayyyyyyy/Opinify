"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { deleteFeedback } from "@/app/actions/deleteFeedback";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FeedbackViewProps = {
  name: string;
  email: string;
  rating: number;
  feedback: string;
  projectId: string;
  submitted: string;
  avatarSrc?: string;
};

export function FeedbackView({
  name,
  email,
  rating,
  feedback,
  projectId,
  submitted,
}: FeedbackViewProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    const { success } = await deleteFeedback(projectId);
    if (success) {
      setLoading(false);
      router.refresh();
    } else {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Review</Button>
      </DialogTrigger>
      <DialogContent className="md:w-full w-[95vw] p-6 md:p-8 bg-background rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage
                src={`https://ui-avatars.com/api/?name=${name}`}
                alt={name}
              />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </div>
          <div className="flex items-center gap-0.5 text-primary">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon
                key={index}
                className={`w-5 h-5 fill-current ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <Separator />
        <div className="py-6 text-sm leading-loose overflow-x-hidden max-h-60 whitespace-pre-wrap text-wrap hyphens-auto text-muted-foreground hypens">
          <p>
            <span className="font-medium text-white">Feedback:</span> {feedback}
          </p>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          {/* <p>
            <span className="font-medium text-white">Project ID:</span>{" "}
            {projectId}
          </p> */}
          <p>
            <span className="font-medium text-white">Submitted:</span>{" "}
            {submitted}
          </p>
        </div>
        <Separator />
        <DialogFooter>
          {loading ? (
            <Button>
              <Loader size={16} className="animate-spin" />
            </Button>
          ) : (
            <Button onClick={handleDelete}>Delete</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
