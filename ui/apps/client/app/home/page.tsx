import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { SignOutButton } from "ui";

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(session)}</pre>
      <SignOutButton />
    </div>
  );
}
