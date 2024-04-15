import { connectToMongoDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectToMongoDB();
export async function POST(request: NextRequest) {
  try {
    //grabbing data inside the request
    const reqBody = await request.json();
    //destructuring data
    const { email, password } = reqBody;
    console.log(reqBody);

    //verifying user existence by confirming their email prior to login
    const user = await User.findOne({ email });
    //no valid user
    if (!user) {
      return NextResponse.json(
        {
          error: "User does not exist",
        },
        { status: 400 }
      );
    }
    console.log(user);

    //checking if password is correct
    //comparing passwords comming from the request with the password from DB
    const validPassword = await bcryptjs.compare(password, user.password);

    //password invalid
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    //password walid, create the token data using jwt
    const tokenData = {
      id: user._id,
      username: user.username,
      surname: user.surname,
      email: user.email,
    };

    //creating token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "3d",
    });

    //user's cookies
    const response = NextResponse.json({
      message: "Successfully logged in",
      success: true,
    });

    //sending token to users cookies
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
