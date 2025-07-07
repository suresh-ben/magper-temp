import ShiftModal, { type Shift } from "../models/Shift";

export async function updateShift(shiftData: Shift) {
    try {
        const shift = await ShiftModal.findOneAndUpdate({ shiftId: shiftData.shiftId }, shiftData, { new: true, upsert: true  });
        return shift;
    } catch (error) {
        throw new Error('Error creating load');
    }
}

export async function getShift(shiftId: string) {
    try {
        const shift = await ShiftModal.find({ shiftId });
        return shift[0];
    } catch (error) {
        throw new Error('Error fetching load details');
    }
}