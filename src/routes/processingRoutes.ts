import express from "express";
import { getShift, updateShift } from "../controllers/processingController";

const router = express.Router(); 

// Load/Bales 
router.post('/update-shift', updateShift);
router.get('/shift/:shiftId', getShift)

export default router;