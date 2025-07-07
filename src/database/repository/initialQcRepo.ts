import InitialQcModel, { type InitialQC } from "../models/InitialQC";
import { getLoad } from "./loadRepo";

export async function updateInitialQC(initialQcData: InitialQC) {
    try {
        const loadId = initialQcData.loadId;
        const load = await getLoad(loadId);
        if(!load) throw new Error("No load found!");

        const initialQC = await InitialQcModel.findOneAndUpdate({ loadId: initialQcData.loadId }, initialQcData, { new: true, upsert: true });

        return initialQC;
    } catch (error) {
        throw error;
    }
}

export async function getInitialQC(loadId: string) {
    try {
        const load = await getLoad(loadId);
        const initialQC = await InitialQcModel.find({ loadId });
        if(initialQC.length == 0) return {};
        
        return { initialQC: initialQC[0], load };
    } catch (error) {
        throw error;
    }
}