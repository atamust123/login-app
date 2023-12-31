import { getDataFromToken } from "@/app/actions/getToken";
import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/libs/userModel";
import { NextResponse } from "next/server";

connect();

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     description: If user logged in, get the current user and sets the token
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
