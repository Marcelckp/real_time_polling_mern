import CreatePoll from "@/app/create-poll/component/create-poll-page";
import Navbar from "@/components/Navbar";
import { getUser } from "@/app/actions";

export default async function Page() {
  const user = getUser();
  return (
    <>
      <Navbar user={user} />
      <CreatePoll />
    </>
  );
}
