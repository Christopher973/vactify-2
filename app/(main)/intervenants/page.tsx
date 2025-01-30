import { auth } from "@/lib/auth";
import Image from "next/image";
import Login from "@/app/(auth)/login/page";

export default async function Intervenants() {
  const session = await auth();
  return (
    <>
      <div>
        <h1>Intervenants page</h1>
      </div>
    </>
  );
}
