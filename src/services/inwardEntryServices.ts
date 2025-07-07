import { type InitialQC } from "../database/models/InitialQC";
import { type Load } from "../database/models/Load";
import { createLoad, getLoad } from "../database/repository/loadRepo";
import { updateInitialQC, getInitialQC } from "../database/repository/initialQcRepo";

export async function handleCreateLoad(loadData: Load) {
    try {
        const load = await createLoad(loadData);
        return load;
    } catch (error) {
        throw error;
    }
}

export async function handleGetLoad(qrId: string) {
    try {
        const load = await getLoad(qrId);
        return load;
    } catch (error) {
        throw error;
    }
}

export async function handleUpdateInitialQC(initialQcData: InitialQC) {
    try {
        const initialQC = await updateInitialQC(initialQcData);
        return initialQC;
    } catch (error) {
        throw error;
    }
}

export async function handleGetInitialQC(loadId: string) {
    try {
        const data = await getInitialQC(loadId);
        return data;
    } catch (error) {
        throw error;
    }
}