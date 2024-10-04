import LoginPage from "@/app/login/component/login-page";
import Navbar from "@/components/Navbar";
import { getUser } from "@/app/actions";

export default async function Page() {
  const user = getUser();

  return (
    <>
      <Navbar user={user} />
      <LoginPage />
    </>
  );
}
