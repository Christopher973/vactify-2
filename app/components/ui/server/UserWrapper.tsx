import { auth } from "@/lib/auth";
import UserIcon from "./UserIcon";

export default async function UserIconWrapper() {
  const session = await auth();

  return <UserIcon user={session?.user} />;
}
