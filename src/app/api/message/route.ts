import { sendMailToAdmin } from "@/Helper/sendMailToAdmin";
import { NextResponse } from "next/server";
export async function POST(request: Request, response: NextResponse) {
  const data = await request.json();
  const { name, email, message } = data;
  
  try {
    await sendMailToAdmin(name, message, email);
    return Response.json(
      {
        success: true,
        message: "Mail sended successfully  ",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Mail send failed. ",
      },
      { status: 400 }
    );
  }
}
