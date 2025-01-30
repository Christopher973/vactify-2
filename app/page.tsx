import { auth } from "@/lib/auth";
import { LoginButton, LogoutButton } from "./components/sign-in";
import SignIn from "./components/SignIn";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <main>
        <h1>Hello, world!</h1>
        {session?.user ? (
          "Authenticated " + session?.user.email + " " + session?.user.name
        ) : (
          <SignIn />
        )}

        {/*
        <i>
          {session?.user
            ? "Authenticated " + session?.user.email
            : "Unauthenticated"}
        </i>
        <div>{session?.user ? <LogoutButton /> : <LoginButton />}</div>
        */}
      </main>
    </>
  );
}
