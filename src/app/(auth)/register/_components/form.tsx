"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, SquareArrowRightEnter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import z from "zod";

type TForm = z.infer<typeof schema>;

const schema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ error: "Cannot be empty" })
    .max(100, { error: "Max 100 characters" })
    .check(z.email({ error: "Invalid email address" })),
  password: z.string().trim().nonempty({ error: "Cannot be empty" }).max(40, { error: "Max 40 characters" }),
});

export default function Form() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TForm>({ mode: "all", resolver: zodResolver(schema) });

  const submit: SubmitHandler<TForm> = (data) => {
    //
  };

  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FieldSet>
        <FieldGroup className="gap-y-2">
          <Controller
            control={control}
            defaultValue=""
            name="email"
            render={({ field, fieldState }) => (
              <Field className="gap-y-1" aria-invalid={Boolean(fieldState.error)}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  id="email"
                  placeholder="john@example.com"
                  autoFocus
                  aria-invalid={Boolean(fieldState.error)}
                />
                {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
              </Field>
            )}
          />

          <Controller
            control={control}
            defaultValue=""
            name="password"
            render={({ field, fieldState }) => (
              <Field className="gap-y-1" aria-invalid={Boolean(fieldState.error)}>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    type={isPasswordShow ? "text" : "password"}
                    id="password"
                    placeholder="*****"
                    aria-invalid={Boolean(fieldState.error)}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupButton size="icon-xs" onClick={() => setIsPasswordShow((prev) => !prev)}>
                      {isPasswordShow ? <Eye /> : <EyeOff />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
                {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
              </Field>
            )}
          />

          <Field className="gap-y-1">
            <Button variant="default">
              <SquareArrowRightEnter /> Sign Up
            </Button>
            <FieldDescription className="text-center">
              Already had an account? <Link href="/login">Sign in</Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
