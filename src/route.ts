import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { getOneProduct, getProducts } from "./handlers/product";

const router = Router();

/**
 * Product
 */
router.get("/product", getProducts);
router.get("/product/:id", () => {});
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {
    const errors = validationResult(res);

    if (!errors.isEmpty()) {
      res.status(401);
      res.json({ error: errors.array() });
    }
  }
);
router.post(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  () => {}
);
router.delete("/product", () => {});

/**
 * Update
 */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").exists().isString(),
  body("body").exists().isString(),
  oneOf([body("IN_PROGRESS"), body("SHIPPED"), body("DEPRECATED")]),
  body("version").optional(),
  () => {}
);
router.post("/update/", () => {
  body("title").exists().isString();
  body("body").exists().isString();
});
router.delete("/update/:id", () => {});

/**
 * Update point
 */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  () => {}
);
router.post(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  body("updatedId").exists().isString(),
  () => {}
);
router.delete("/updatepoint", () => {});

export default router;
