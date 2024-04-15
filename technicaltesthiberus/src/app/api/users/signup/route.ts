import { connectToMongoDB } from "@/dbConfig/dbConfig";

import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";

import bcryptjs from "bcryptjs";

connectToMongoDB();

// Creating a new user inside DB
export async function POST(request: NextRequest) {
  try {
    //grab data from body
    const reqBody = await request.json();

    console.log("entrei no signup no backend");

    //destructuring the incoming variable
    const { username, surname, email, password } = reqBody;

    //remove in production
    console.log(reqBody);

    //checking if user already exist or not
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          error: "User already exist",
        },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //create new user
    const newUser = new User({
      username,
      surname,
      email,
      password: hashedPassword,
    });

    //save user in DB
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created!",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.log("erro no server");
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
