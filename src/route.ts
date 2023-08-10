import { Router } from "express";
import { body, validationResult } from "express-validator";

const router = Router();

/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: "Hello World!" });
});
router.get("/product/:id", () => {});
router.put("/product/:id", body("name").isString(), (req, res) => {
  const errors = validationResult(res);

  if (!errors.isEmpty()) {
    res.status(401);
    res.json({ error: errors.array() });
  }
});
router.post("/product/:id", () => {});
router.delete("/product", () => {});

/**
 * Update
 */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update/:id", () => {});
router.delete("/update", () => {});

/**
 * Update point
 */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint/:id", () => {});
router.delete("/updatepoint", () => {});

export default router;
