import mongoose, { Schema } from "mongoose"

export type Load = {
    qrId: string,

    supplierName: string,
    vehicleNumber: string,
    invoiceNumber: string,
    invoiceDate: string,
    eBillNo: string,
    eBillDate: string,
    arrivalDate: string,
    arrivalTime: string,

    mixed_quantityBilled: null | number,
    mixed_quantityRcs: null | number,
    mixed_bales: null | number,

    fresh_quantityBilled: null | number,
    fresh_quantityRcs: null | number,
    fresh_bales: null | number,

    green_quantityBilled: null | number,
    green_quantityRcs: null | number,
    green_bales: null | number,
}

const LoadSchema = new Schema<Load>({
    qrId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    supplierName: { 
        type: String, 
    },
    vehicleNumber: {
        type: String,
    },
    invoiceNumber: {
        type: String,
    },
    invoiceDate: {
        type: String,
    },
    eBillNo: {
        type: String,
    },
    eBillDate: {
        type: String,
    },
    arrivalDate: {
        type: String,
    },
    arrivalTime: {
        type: String,
    },

    mixed_quantityBilled: {
        type: Number,
        default: null
    },
    mixed_quantityRcs: {
        type: Number,
        default: null
    },
    mixed_bales: {
        type: Number,
        default: null
    },

    fresh_quantityBilled: {
        type: Number,
        default: null
    },
    fresh_quantityRcs: {
        type: Number,
        default: null
    },
    fresh_bales: {
        type: Number,
        default: null
    },

    green_quantityBilled: {
        type: Number,
        default: null
    },
    green_quantityRcs: {
        type: Number,
        default: null
    },
    green_bales: {
        type: Number,
        default: null
    },
});

export default mongoose.model('Load', LoadSchema);