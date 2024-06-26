"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { ErrorMessage } from "@hookform/error-message";
import { AnimatePresence, motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface TicketFormInput {
  name: string;
  email: string;
  description: string;
}

export default function Home() {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm<TicketFormInput>();

  const createTicket = async (data: TicketFormInput) => {
    const { name, email, description } = data;
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        description,
      }),
    });
  };

  const ticketMutation = useMutation({
    mutationFn: createTicket,
  });

  const onSubmit: SubmitHandler<TicketFormInput> = async (data) => {
    ticketMutation.mutate(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <AnimatePresence>
        <div className="py-6 text-bold">Report an Issue</div>
        {isSubmitSuccessful ? (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="py-6">Thanks for reporting your issue!</div>
            <button onClick={() => reset()} className="button">
              Report Another Issue
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full"
          >
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                id="Name"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
                error={errors}
              />
              <Input
                id="Email"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                error={errors}
              />
              <TextArea
                id="Description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                })}
                error={errors}
              />
              <button
                type="submit"
                className="button w-80 m-auto"
                disabled={ticketMutation.status === "pending"}
              >
                {ticketMutation.status === "pending"
                  ? "Submitting..."
                  : "Submit"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
