import express from "express";
import {
  countByBuilding,
  countByType,
  createCategories,
  deleteCategories,
  getCategories,
  getCategoriesRooms,
  getAllCategories,
  updateCategories,
} from "../controllers/categories.js";
import Categories from "../models/Categories.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCategories);

//UPDATE
router.put("/:id", verifyAdmin, updateCategories);
//DELETE
router.delete("/:id", verifyAdmin, deleteCategories);
//GET

router.get("/find/:id", getCategories);
//GET ALL

router.get("/", getAllCategories);
router.get("/countByBuilding", countByBuilding);
router.get("/countByType", countByType);
router.get("/room/:id", getCategoriesRooms);

export default router;
