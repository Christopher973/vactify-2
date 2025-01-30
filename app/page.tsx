import { auth } from "@/lib/auth";
import SignIn from "./components/auth/SignIn";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { SignOutButton } from "./components/auth/SignOutButton";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <main>
        {session?.user ? (
          <div>
            <h4 className="text-xl">
              Hello {session?.user.name},
              <Image
                src={session?.user.image ?? ""}
                alt="profile picture"
                width={100}
                height={100}
              />
            </h4>
            <div>
              <p>
                <strong>Email : {session?.user.email}</strong>
              </p>
            </div>

            <SignOutButton />
          </div>
        ) : (
          <SignIn />
        )}
      </main>
    </>
  );
}
