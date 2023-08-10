import { validationResult } from "express-validator";

export const handleInputErrors = (req: any, res: any, next: any) => {
  const errors = validationResult(res);

  if (!errors.isEmpty()) {
    res.status(401);
    res.json({ error: errors.array() });
  } else {
    next();
  }
};
