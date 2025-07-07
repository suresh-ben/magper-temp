import { type Shift } from "../database/models/Shift";
import { updateShift, getShift } from "../database/repository/shiftRepo";

export async function handleUpdateShift(shiftData: Shift) {
    try {
        const shift = await updateShift(shiftData);
        return shift;
    } catch (error) {
        throw error;
    }
}

export async function handleGetShift(shiftId: string) {
    try {
        const shift = await getShift(shiftId);
        return shift;
    } catch (error) {
        throw error;
    }
}