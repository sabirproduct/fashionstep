// src/app/page.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Next.js Project</CardTitle>
          <CardDescription>
            With Tailwind CSS, Shadcn UI, and Firebase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Your new project is ready! This template includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Next.js with App Router</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Shadcn UI Components</li>
            <li>Firebase Integration</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button>Get Started</Button>
        </CardFooter>
      </Card>
    </main>
  );
}