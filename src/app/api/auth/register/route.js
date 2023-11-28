import connect from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs"

export const POST = async (request) => {
  const { name, email, password } = await request.json()
  console.log("register", name);
  
  await connect();


  const newUser = new User({
    name,
    email,
    password
  })

  try {
    await newUser.save()
    return new NextResponse("user has been created", {
      status: 201,
    })
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500
    })
  }
}

