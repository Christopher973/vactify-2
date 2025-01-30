import { auth } from "@/lib/auth";
import { LoginButton } from "./AuthButtons";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <main>
        <h1>Hello, world!</h1>
        <i>
          {session?.user
            ? "Authenticated " + session?.user.email
            : "Unauthenticated"}
        </i>
        <div>{session?.user ? <LoginButton /> : <LoginButton />}</div>
      </main>
    </>
  );
}
