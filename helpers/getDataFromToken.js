import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
  try {
    const encodedToken = request.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(encodedToken, process.env.TOKEN_SECRET);
    return decodedToken.id;
  } catch (error) {
    throw new Error("Invalid token");
  }
};