import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { user_id } = await request.json();
    const supabase = createRouteHandlerClient({ cookies });

    // Delete user data from Supabase
    await supabase.from("user_data").delete().eq("user_id", user_id);

    return NextResponse.json({
      url: `${process.env.NEXT_PUBLIC_APP_URL}/privacy#data-deletion`,
      confirmation_code: user_id,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process deletion request" },
      { status: 500 }
    );
  }
}
