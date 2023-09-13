"use client";
import Spinner from "@/components/Spinner";
import { useSession, getSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "unauthenticated") {
    console.log("unauthenticated", session);
    return (
      <div>
        <p>Access Denied</p>
      </div>
    );
  }
  console.log("session", session);

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  );
}
