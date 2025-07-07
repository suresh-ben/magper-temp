import mongoose, { Schema } from "mongoose"

export type Shift = {
    updatedBy: string,
    shiftId: string,
    shiftSummary: string,

    // Bale inputs
    // hour 1
    timings01: string,
    balesConsumption01: number | null,
    balesWeight01: number | null,
    loads01: string[],

    // hour 2
    timings02: string,
    balesConsumption02: number | null,
    balesWeight02: number | null,
    loads02: string[],

    // hour 3
    timings03: string,
    balesConsumption03: number | null,
    balesWeight03: number | null,
    loads03: string[],

    // hour 4
    timings04: string,
    balesConsumption04: number | null,
    balesWeight04: number | null,
    loads04: string[],

    // hour 5
    timings05: string,
    balesConsumption05: number | null,
    balesWeight05: number | null,
    loads05: string[],

    // hour 6
    timings06: string,
    balesConsumption06: number | null,
    balesWeight06: number | null,
    loads06: string[],

    // hour 7
    timings07: string,
    balesConsumption07: number | null,
    balesWeight07: number | null,
    loads07: string[],

    // hour 8
    timings08: string,
    balesConsumption08: number | null,
    balesWeight08: number | null,
    loads08: string[],

    // ---

    // Workers
    males: number | null,
    females: number | null,
    feeding: number | null,
    sorting20L: number | null,
    preWashAreaCleaning: number | null,
    bottleSortersAreaCleaning: number | null,
    manualSorting01: number | null,
    labelBlower: number | null,
    bottleSorter2Rejection: number | null,
    manualSorting02: number | null,
    allRejectionBagging: number | null,
    finishingLineCleaning: number | null,
    fgBagging: number | null,

    // ---

    // Bootles rejections
    feedingWireRaffis: number | null,
    dryTrommelCapsSandMix: number | null,
    removeJar20L: number | null,
    magneticBeltMetal: number | null,
    preWashLabelsCaps: number | null,
    starScreen01LabelsCaps: number | null,
    sorting0102MilkyBottles: number | null,
    sorting0102ColorMixBottles: number | null,
    sorting0102PePpBottles: number | null,
    sorting0102MetalBottles: number | null,
    sorting0102DirtyDegradeBottles: number | null,
    sorting0102HardWrapper: number | null,
    labelRemoverLabel: number | null,
    starScreen02AllMix: number | null,
    sesotecBottleSorterFinalRejectionNonPetPolymerBottels: number | null,

    // ---

    // Flakes
    hotWashWetFines: number | null,
    hydroCycloneWetFines: number | null,
    hydroCycloneCapMix: number | null,
    vibroFines: number | null,
    airShifter01LightFlakesLabels: number | null,
    airShifter02LightFlakesLabels: number | null,
    eddyCurrentSeperatorAluminiumWithFlakes: number | null,
    sesotecFlakesSorterFinalRejectionPolymerFlakes: number | null,
    metalrejectionMetal: number | null,
}

const ShiftSchema = new Schema<Shift>({
    updatedBy: {
        type: String,
        required: true,
    },
    shiftId: {
        type: String,
        unique: true,
        index: true,
        required: true,
    },
    shiftSummary: {
        type: String,
    },
    
    //shifts:
    // hour 1
    timings01: {
        type: String,
    },
    balesConsumption01: {
        type: Number,
    },
    balesWeight01: {
        type: Number,
    },
    loads01: {
        type: [String],
    },

    // hour 2
    timings02: {
        type: String,
    },
    balesConsumption02: {
        type: Number,
    },
    balesWeight02: {
        type: Number,
    },
    loads02: {
        type: [String],
    },

    // hour 3
    timings03: {
        type: String,
    },
    balesConsumption03: {
        type: Number,
    },
    balesWeight03: {
        type: Number,
    },
    loads03: {
        type: [String],
    },

    // hour 4
    timings04: {
        type: String,
    },
    balesConsumption04: {
        type: Number,
    },
    balesWeight04: {
        type: Number,
    },
    loads04: {
        type: [String],
    },

    // hour 5
    timings05: {
        type: String,
    },
    balesConsumption05: {
        type: Number,
    },
    balesWeight05: {
        type: Number,
    },
    loads05: {
        type: [String],
    },

    // hour 6
    timings06: {
        type: String,
    },
    balesConsumption06: {
        type: Number,
    },
    balesWeight06: {
        type: Number,
    },
    loads06: {
        type: [String],
    },

    // hour 7
    timings07: {
        type: String,
    },
    balesConsumption07: {
        type: Number,
    },
    balesWeight07: {
        type: Number,
    },
    loads07: {
        type: [String],
    },

    // hour 8
    timings08: {
        type: String,
    },
    balesConsumption08: {
        type: Number,
    },
    balesWeight08: {
        type: Number,
    },
    loads08: {
        type: [String],
    },

    // Workers
    males: {
        type: Number,
    },
    females: {
        type: Number,
    },
    feeding: {
        type: Number,
    },
    sorting20L: {
        type: Number,
    },
    preWashAreaCleaning: {
        type: Number,
    },
    bottleSortersAreaCleaning: {
        type: Number,
    },
    manualSorting01: {
        type: Number,
    },
    labelBlower: {
        type: Number,
    },
    bottleSorter2Rejection: {
        type: Number,
    },
    manualSorting02: {
        type: Number,
    },
    allRejectionBagging: {
        type: Number,
    },
    finishingLineCleaning: {
        type: Number,
    },
    fgBagging: {
        type: Number,
    },

    // Bottles
    feedingWireRaffis: {
        type: Number,
    },
    dryTrommelCapsSandMix: {
        type: Number,
    },
    removeJar20L: {
        type: Number,
    },
    magneticBeltMetal: {
        type: Number,
    },
    preWashLabelsCaps: {
        type: Number,
    },
    starScreen01LabelsCaps: {
        type: Number,
    },
    sorting0102MilkyBottles: {
        type: Number,
    },
    sorting0102ColorMixBottles: {
        type: Number,
    },
    sorting0102PePpBottles: {
        type: Number,
    },
    sorting0102MetalBottles: {
        type: Number,
    },
    sorting0102DirtyDegradeBottles: {
        type: Number,
    },
    sorting0102HardWrapper: {
        type: Number,
    },
    labelRemoverLabel: {
        type: Number,
    },
    starScreen02AllMix: {
        type: Number,
    },
    sesotecBottleSorterFinalRejectionNonPetPolymerBottels: {
        type: Number,
    },

    // Flakes
    hotWashWetFines: {
        type: Number,
    },
    hydroCycloneWetFines: {
        type: Number,
    },
    hydroCycloneCapMix: {
        type: Number,
    },
    vibroFines: {
        type: Number,
    },
    airShifter01LightFlakesLabels: {
        type: Number,
    },
    airShifter02LightFlakesLabels: {
        type: Number,
    },
    eddyCurrentSeperatorAluminiumWithFlakes: {
        type: Number,
    },
    sesotecFlakesSorterFinalRejectionPolymerFlakes: {
        type: Number,
    },
    metalrejectionMetal: {
        type: Number,
    },
}, { timestamps: true });

export default mongoose.model('Shift', ShiftSchema);