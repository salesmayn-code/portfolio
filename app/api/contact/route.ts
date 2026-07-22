import { NextResponse } from "next/server";
import { contactSchema } from "@/utils/validators";
export async function POST(request: Request) {
  const result = contactSchema.safeParse(await request.json());
  if (!result.success)
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  return NextResponse.json(
    { error: "Contact delivery has not been configured yet." },
    { status: 501 },
  );
}
