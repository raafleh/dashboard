import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Form from "./_components/form";

export const metadata: Metadata = { title: "Sign Up" };

export default function Page() {
  return (
    <Card className="w-full max-w-96">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Enter your email below to sign up.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form />
      </CardContent>
    </Card>
  );
}
