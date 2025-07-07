import express from "express";
import { getLoad, createLoad, updateInitialQC, getInitialQC } from "../controllers/inwardEntryController";

const router = express.Router(); 

// Load/Bales 
router.post('/create-load', createLoad);
router.get('/load/:qrId', getLoad);
router.post('/update-initialQC', updateInitialQC);
router.get('/initialQc/:loadId', getInitialQC);

export default router;