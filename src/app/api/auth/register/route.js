import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismaDB";

export async function POST(req) {
  const { email, password } = await req.json();
  const exists = await prisma.User.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  } else {
    const user = await prisma.User.create({
      data: {
        email,
        hashedPassword: await hash(password, 10),
      },
    });
    return NextResponse.json(user);
  }
}
