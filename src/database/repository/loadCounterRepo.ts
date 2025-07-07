import LoadCounter from "../models/LoadCounter";

export async function generateNewLoadId() {
    try {
        //denerate date string: ddMMyyyy
        //get the sequce document of the current date
        //if not exists, create a new one
        //get it and increment the sequence
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        const dateString = `${dd}${mm}${yyyy}`;
        const sequenceDoc = await LoadCounter.findOneAndUpdate({ date: dateString }, { $inc: { sequence: 1 } }, { upsert: true, new: true });

        const paddedSeq = String(sequenceDoc.sequence).padStart(2, '0');
        return `LOAD${dateString}${paddedSeq}`
    } catch (error) {
        throw error;
    }
}