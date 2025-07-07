import { Request, Response } from "express";
import { type Load } from "../database/models/Load";
import { type InitialQC } from "../database/models/InitialQC";
import { handleCreateLoad, handleGetLoad } from "../services/inwardEntryServices";
import { handleGetInitialQC, handleUpdateInitialQC } from "../services/inwardEntryServices";

export async function getLoad(req: Request, res: Response) {
    try {
        const { qrId } = req.params; 
        const load = await handleGetLoad(qrId); 

        res.status(201).json({ load });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createLoad(req: Request, res: Response) {
    try {
        const { loadData }: { loadData: Load } = req.body;
        const load = await handleCreateLoad(loadData); 

        res.status(201).json({ load });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getInitialQC(req: Request, res: Response) {
    try {
        const { loadId } = req.params; 
        const data = await handleGetInitialQC(loadId); 

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updateInitialQC(req: Request, res: Response) {
    try {
        const { initialQcData }: { initialQcData: InitialQC } = req.body;
        const initialQC = await handleUpdateInitialQC(initialQcData); 

        res.status(201).json({ initialQC });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}