import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userLogoutResponse = NextResponse.json({
      message: "Logged out successfully!",
      success: true,
    });

    //setting existing token empty
    userLogoutResponse.cookies.set('token', '', {
      httpOnly: true,
      //make token expire 
      expires: new Date(0)
    });

    return userLogoutResponse;
    
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
