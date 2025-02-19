import { connect } from "../../../dbConfig/dbConfig";
import User from "../../../models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import * as cookie from "cookie";

connect();

export default async function handler(req, res) {
  console.log("Request received:", req.method);

  if (req.method !== "POST") {
    console.log("Invalid method:", req.method);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    console.log("Request body:", req.body);

    const { email, password } = req.body;
    if (!email || !password) {
      console.log("Missing email or password");
      return res.status(400).json({ error: "Email and password are required" });
    }

    console.log("Finding user with email:", email);
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ error: "User does not exist" });
    }

    console.log("Comparing passwords...");
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      console.log("Invalid password entered");
      return res.status(400).json({ error: "Invalid password" });
    }

    console.log("Generating JWT token...");
    const tokenData = { id: user._id, username: user.username, email: user.email };
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

    console.log("Setting cookie...");
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 86400,
        path: "/",
      })
    );

    console.log("User logged in successfully!");
    return res.status(200).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error("Error in login handler:", error);
    return res.status(500).json({ error: error.message });
  }
}