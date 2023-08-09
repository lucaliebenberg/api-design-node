import jwt from "jsonwebtoken";
import brcrypt from "bcrypt";

export const comparePasswords = (password: any, hash: any) => {
  return brcrypt.compare(password, hash);
};

export const hashPassword = (password: any) => {
  return brcrypt.hash(password, 5);
};

// @ts-ignore
export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    // @ts-ignore
    process.env.JWT_SECRET
  );
  return token;
};

// @ts-ignore
export const protect = (req, res) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "not valid token" });
    return;
  }

  try {
    // @ts-ignore
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    console.log(payload);
    next();
    return;
  } catch (e) {
    console.error(e);
    res.status(401);
    res.send("Not authorized");
    return;
  }
};

function next() {
  throw new Error("Function not implemented.");
}
