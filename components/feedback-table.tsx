"use client";

import { useState, useMemo } from "react";
import { unparse } from "papaparse";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { FeedbackView } from "./feedback-view";

interface FeedbackItem {
  id: string;
  name: string;
  email: string;
  feedback: string;
  rating: number;
  createdAt: Date;
}

type SortOption = {
  key: keyof FeedbackItem;
  order: "asc" | "desc";
};

type FeedbackTableProps = {
  initialFeedback: FeedbackItem[];
  initialSort: SortOption;
};

function generateCSV(data: FeedbackItem[]): string {
  return unparse(data, {
    columns: ["name", "email", "feedback", "rating", "createdAt"],
    quotes: true,
    quoteChar: '"',
    escapeChar: '"',
    delimiter: ",",
    header: true,
    newline: "\n",
  });
}

function downloadCSV(
  data: FeedbackItem[],
  filename = "feedback_data.csv"
): void {
  const csv = generateCSV(data);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function FeedbackTable({
  initialFeedback,
  initialSort,
}: FeedbackTableProps) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>(initialSort);

  const filteredFeedback = useMemo(() => {
    return initialFeedback
      .filter((item) => {
        const searchValue = search.toLowerCase();
        return (
          item.name.toLowerCase().includes(searchValue) ||
          item.email.toLowerCase().includes(searchValue) ||
          item.feedback.toLowerCase().includes(searchValue)
        );
      })
      .sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.key] > b[sort.key] ? 1 : -1;
        } else {
          return a[sort.key] < b[sort.key] ? 1 : -1;
        }
      });
  }, [initialFeedback, search, sort]);

  const handleSort = (key: keyof FeedbackItem) => {
    if (sort.key === key) {
      setSort({ key, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      setSort({ key, order: "asc" });
    }
  };

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Customer Feedback</CardTitle>
        <CardDescription>
          View and manage customer feedback for your website 🚀.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-x-2 justify-between mb-4">
          <Input
            placeholder="Search feedback..."
            className="bg-white dark:bg-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="shrink-0">
                  <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="end">
                <DropdownMenuRadioGroup
                  value={sort.key}
                  onValueChange={(key) => handleSort(key as keyof FeedbackItem)}
                >
                  <DropdownMenuRadioItem value="name">
                    Name
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="rating">
                    Rating
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="createdAt">
                    Created At
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="outline"
              onClick={() => downloadCSV(filteredFeedback)}
            >
              Export CSV <DownloadIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name
                {sort.key === "name" && (
                  <span className="ml-1">
                    {sort.order === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Feedback</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("rating")}
              >
                Rating
                {sort.key === "rating" && (
                  <span className="ml-1">
                    {sort.order === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("createdAt")}
              >
                Created At
                {sort.key === "createdAt" && (
                  <span className="ml-1">
                    {sort.order === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFeedback.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {item.email.length > 10
                    ? `${item.email.slice(0, 10)}...`
                    : item.email}
                </TableCell>
                <TableCell>
                  {item.feedback.length > 10
                    ? `${item.feedback.slice(0, 10)}...`
                    : item.feedback}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <StarIcon key={index} className="w-5 h-5 fill-primary" />
                    ))}
                    {Array.from({ length: 5 - item.rating }).map((_, index) => (
                      <StarIcon
                        key={index}
                        className="w-5 h-5 fill-muted stroke-muted-foreground"
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell>{item.createdAt.toDateString()}</TableCell>
                <TableCell>
                  <FeedbackView
                    email={item.email}
                    feedback={item.feedback}
                    name={item.name}
                    rating={item.rating}
                    projectId={item.id}
                    submitted={item.createdAt.toLocaleDateString()}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function ArrowUpDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
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

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
