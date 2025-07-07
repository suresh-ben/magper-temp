import { Request, Response } from "express";
import { type Shift } from "../database/models/Shift";
import { handleGetShift, handleUpdateShift } from "../services/processingServices";

export async function getShift(req: Request, res: Response) {
    try {
        const { shiftId } = req.params; 
        const shift = await handleGetShift(shiftId); 

        res.status(201).json({ shift });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateShift(req: Request, res: Response) {
    try {
        const { shiftData, shiftId, updatedBy }: { shiftData: Shift, shiftId: string, updatedBy: string } = req.body;
        const shift = await handleUpdateShift({ ...shiftData, shiftId, updatedBy }); 

        res.status(201).json({ shift });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}