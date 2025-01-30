import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

import Sidebar from "@/app/components/utils/Sidebar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        {children}
      </main>
    </div>
  );
}
