const {
  createProduct,
  deleteOneProduct,
  getAllProducts,
  getOneProduct,
  updateOneProduct,
} = require("../controllers/productController");
const router = require("express").Router();

EntryPoint: " /products";
router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getOneProduct);

router.put("/", updateOneProduct);
router.delete("/:id", deleteOneProduct);

module.exports = router;
