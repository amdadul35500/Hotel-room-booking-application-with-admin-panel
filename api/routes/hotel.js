import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHote,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Count By City
router.get("/countByCity", countByCity);

// count By Type
router.get("/countByType", countByType);

// CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHote);

// DETELE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getHotels);

// GET Rooms
router.get("/room/:id", getHotelRooms);

export default router;
