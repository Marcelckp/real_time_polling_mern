import Navbar from "@/components/Navbar";
import { NextResponse } from "next/server";
import { getUser } from "@/app/actions";

export const dynamic = "force-dynamic";

export default async function Page() {
  try {
    const user = getUser();

    return (
      <>
        <Navbar user={user} />
          <div className="flex justify-center m-4 p-8 ">No Liked Poll</div>
      </>
    );
  } catch (e) {
    return NextResponse.json({
      apiMessage: { errorMsg: "Internal Server Error, Please try again later" },
    });
  }
}
