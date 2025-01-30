import { auth } from "@/lib/auth";
import Image from "next/image";
import { SignOutButton } from "@/app/components/auth/SignOutButton";
import Login from "@/app/(auth)/login/page";

export default async function Intervenants() {
  const session = await auth();
  return (
    <>
      <div>
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
          <Login />
        )}
      </div>
    </>
  );
}
