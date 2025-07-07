import LoadModel, { type Load } from "../models/Load";
import { generateNewLoadId } from "./loadCounterRepo";

export async function createLoad(loadData: Load) {
    try {
        const newQrId = await generateNewLoadId();
        loadData.qrId = newQrId;

        const load = new LoadModel(loadData);
        await load.save();

        return load;
    } catch (error) {
        throw new Error('Error creating load');
    }
}

export async function getLoad(qrId: string) {
    try {
        const load = await LoadModel.find({ qrId });
        return load[0];
    } catch (error) {
        throw new Error('Error fetching load details');
    }
}