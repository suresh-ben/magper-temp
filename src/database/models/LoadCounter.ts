import mongoose, { Schema } from "mongoose"

export type LoadCounter = {
    date: string,
    sequence: number,
}

const LoadCounterSchema = new Schema<LoadCounter>({
    date: {
        type: String, // Format: YYYYMMDD
        required: true,
        index: true,
        unique: true
    },
    sequence: { 
        type: Number, 
        default: 0,
    },
}, { timestamps: true });

export default mongoose.model('LoadCounter', LoadCounterSchema);