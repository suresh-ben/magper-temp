import mongoose, { Schema } from "mongoose"

export type InitialQC = {
    loadId: string, // maps to qrId in Load

    // Inchanrges
    qcChemist: string,
    qcHead: string,

    // Mixed
    mixed_bale1recoredWeight: number | null,
    mixed_bale2recoredWeight: number | null,
    mixed_packaging_acceptablePercentage?: number | null,
    mixed_packaging_bale1WeightTestResults?: number | null,
    mixed_packaging_bale2WeightTestResults?: number | null,
    mixed_packaging_average?: number | null,
    mixed_packaging_deductions?: number | null,
    mixed_packaging_rate?: number | null,
    mixed_packaging_deductionAmount?: number | null,
    mixed_pvcPc_acceptablePercentage?: number | null,
    mixed_pvcPc_bale1WeightTestResults?: number | null,
    mixed_pvcPc_bale2WeightTestResults?: number | null,
    mixed_pvcPc_average?: number | null,
    mixed_pvcPc_deductions?: number | null,
    mixed_pvcPc_rate?: number | null,
    mixed_pvcPc_deductionAmount?: number | null,
    mixed_ppPe_acceptablePercentage?: number | null,
    mixed_ppPe_bale1WeightTestResults?: number | null,
    mixed_ppPe_bale2WeightTestResults?: number | null,
    mixed_ppPe_average?: number | null,
    mixed_ppPe_deductions?: number | null,
    mixed_ppPe_rate?: number | null,
    mixed_ppPe_deductionAmount?: number | null,
    mixed_coloredBottles_acceptablePercentage?: number | null,
    mixed_coloredBottles_bale1WeightTestResults?: number | null,
    mixed_coloredBottles_bale2WeightTestResults?: number | null,
    mixed_coloredBottles_average?: number | null,
    mixed_coloredBottles_deductions?: number | null,
    mixed_coloredBottles_rate?: number | null,
    mixed_coloredBottles_deductionAmount?: number | null,
    mixed_metal_acceptablePercentage?: number | null,
    mixed_metal_bale1WeightTestResults?: number | null,
    mixed_metal_bale2WeightTestResults?: number | null,
    mixed_metal_average?: number | null,
    mixed_metal_deductions?: number | null,
    mixed_metal_rate?: number | null,
    mixed_metal_deductionAmount?: number | null,
    mixed_oilPaintBottles_acceptablePercentage?: number | null,
    mixed_oilPaintBottles_bale1WeightTestResults?: number | null,
    mixed_oilPaintBottles_bale2WeightTestResults?: number | null,
    mixed_oilPaintBottles_average?: number | null,
    mixed_oilPaintBottles_deductions?: number | null,
    mixed_oilPaintBottles_rate?: number | null,
    mixed_oilPaintBottles_deductionAmount?: number | null,
    mixed_20LtdJars_acceptablePercentage?: number | null,
    mixed_20LtdJars_bale1WeightTestResults?: number | null,
    mixed_20LtdJars_bale2WeightTestResults?: number | null,
    mixed_20LtdJars_average?: number | null,
    mixed_20LtdJars_deductions?: number | null,
    mixed_20LtdJars_rate?: number | null,
    mixed_20LtdJars_deductionAmount?: number | null,
    mixed_dustMudSoil_acceptablePercentage?: number | null,
    mixed_dustMudSoil_bale1WeightTestResults?: number | null,
    mixed_dustMudSoil_bale2WeightTestResults?: number | null,
    mixed_dustMudSoil_average?: number | null,
    mixed_dustMudSoil_deductions?: number | null,
    mixed_dustMudSoil_rate?: number | null,
    mixed_dustMudSoil_deductionAmount?: number | null,
    mixed_moisure_acceptablePercentage?: number | null,
    mixed_moisure_bale1WeightTestResults?: number | null,
    mixed_moisure_bale2WeightTestResults?: number | null,
    mixed_moisure_average?: number | null,
    mixed_moisure_deductions?: number | null,
    mixed_moisure_rate?: number | null,
    mixed_moisure_deductionAmount?: number | null,
    mixed_dirtyBottles_acceptablePercentage?: number | null,
    mixed_dirtyBottles_bale1WeightTestResults?: number | null,
    mixed_dirtyBottles_bale2WeightTestResults?: number | null,
    mixed_dirtyBottles_average?: number | null,
    mixed_dirtyBottles_deductions?: number | null,
    mixed_dirtyBottles_rate?: number | null,
    mixed_dirtyBottles_deductionAmount?: number | null,
    mixed_hardWrapper_acceptablePercentage?: number | null,
    mixed_hardWrapper_bale1WeightTestResults?: number | null,
    mixed_hardWrapper_bale2WeightTestResults?: number | null,
    mixed_hardWrapper_average?: number | null,
    mixed_hardWrapper_deductions?: number | null,
    mixed_hardWrapper_rate?: number | null,
    mixed_hardWrapper_deductionAmount?: number | null,
    mixed_degradedUnwanted_acceptablePercentage?: number | null,
    mixed_degradedUnwanted_bale1WeightTestResults?: number | null,
    mixed_degradedUnwanted_bale2WeightTestResults?: number | null,
    mixed_degradedUnwanted_average?: number | null,
    mixed_degradedUnwanted_deductions?: number | null,
    mixed_degradedUnwanted_rate?: number | null,
    mixed_degradedUnwanted_deductionAmount?: number | null,
    mixed_other_acceptablePercentage?: number | null,
    mixed_other_bale1WeightTestResults?: number | null,
    mixed_other_bale2WeightTestResults?: number | null,
    mixed_other_average?: number | null,
    mixed_other_deductions?: number | null,
    mixed_other_rate?: number | null,
    mixed_other_deductionAmount?: number | null,

    // Fresh
    fresh_bale1recoredWeight: number | null,
    fresh_bale2recoredWeight: number | null,
    fresh_packaging_acceptablePercentage?: number | null,
    fresh_packaging_bale1WeightTestResults?: number | null,
    fresh_packaging_bale2WeightTestResults?: number | null,
    fresh_packaging_average?: number | null,
    fresh_packaging_deductions?: number | null,
    fresh_packaging_rate?: number | null,
    fresh_packaging_deductionAmount?: number | null,
    fresh_pvcPc_acceptablePercentage?: number | null,
    fresh_pvcPc_bale1WeightTestResults?: number | null,
    fresh_pvcPc_bale2WeightTestResults?: number | null,
    fresh_pvcPc_average?: number | null,
    fresh_pvcPc_deductions?: number | null,
    fresh_pvcPc_rate?: number | null,
    fresh_pvcPc_deductionAmount?: number | null,
    fresh_ppPe_acceptablePercentage?: number | null,
    fresh_ppPe_bale1WeightTestResults?: number | null,
    fresh_ppPe_bale2WeightTestResults?: number | null,
    fresh_ppPe_average?: number | null,
    fresh_ppPe_deductions?: number | null,
    fresh_ppPe_rate?: number | null,
    fresh_ppPe_deductionAmount?: number | null,
    fresh_coloredBottles_acceptablePercentage?: number | null,
    fresh_coloredBottles_bale1WeightTestResults?: number | null,
    fresh_coloredBottles_bale2WeightTestResults?: number | null,
    fresh_coloredBottles_average?: number | null,
    fresh_coloredBottles_deductions?: number | null,
    fresh_coloredBottles_rate?: number | null,
    fresh_coloredBottles_deductionAmount?: number | null,
    fresh_metal_acceptablePercentage?: number | null,
    fresh_metal_bale1WeightTestResults?: number | null,
    fresh_metal_bale2WeightTestResults?: number | null,
    fresh_metal_average?: number | null,
    fresh_metal_deductions?: number | null,
    fresh_metal_rate?: number | null,
    fresh_metal_deductionAmount?: number | null,
    fresh_oilPaintBottles_acceptablePercentage?: number | null,
    fresh_oilPaintBottles_bale1WeightTestResults?: number | null,
    fresh_oilPaintBottles_bale2WeightTestResults?: number | null,
    fresh_oilPaintBottles_average?: number | null,
    fresh_oilPaintBottles_deductions?: number | null,
    fresh_oilPaintBottles_rate?: number | null,
    fresh_oilPaintBottles_deductionAmount?: number | null,
    fresh_20LtdJars_acceptablePercentage?: number | null,
    fresh_20LtdJars_bale1WeightTestResults?: number | null,
    fresh_20LtdJars_bale2WeightTestResults?: number | null,
    fresh_20LtdJars_average?: number | null,
    fresh_20LtdJars_deductions?: number | null,
    fresh_20LtdJars_rate?: number | null,
    fresh_20LtdJars_deductionAmount?: number | null,
    fresh_dustMudSoil_acceptablePercentage?: number | null,
    fresh_dustMudSoil_bale1WeightTestResults?: number | null,
    fresh_dustMudSoil_bale2WeightTestResults?: number | null,
    fresh_dustMudSoil_average?: number | null,
    fresh_dustMudSoil_deductions?: number | null,
    fresh_dustMudSoil_rate?: number | null,
    fresh_dustMudSoil_deductionAmount?: number | null,
    fresh_moisure_acceptablePercentage?: number | null,
    fresh_moisure_bale1WeightTestResults?: number | null,
    fresh_moisure_bale2WeightTestResults?: number | null,
    fresh_moisure_average?: number | null,
    fresh_moisure_deductions?: number | null,
    fresh_moisure_rate?: number | null,
    fresh_moisure_deductionAmount?: number | null,
    fresh_dirtyBottles_acceptablePercentage?: number | null,
    fresh_dirtyBottles_bale1WeightTestResults?: number | null,
    fresh_dirtyBottles_bale2WeightTestResults?: number | null,
    fresh_dirtyBottles_average?: number | null,
    fresh_dirtyBottles_deductions?: number | null,
    fresh_dirtyBottles_rate?: number | null,
    fresh_dirtyBottles_deductionAmount?: number | null,
    fresh_hardWrapper_acceptablePercentage?: number | null,
    fresh_hardWrapper_bale1WeightTestResults?: number | null,
    fresh_hardWrapper_bale2WeightTestResults?: number | null,
    fresh_hardWrapper_average?: number | null,
    fresh_hardWrapper_deductions?: number | null,
    fresh_hardWrapper_rate?: number | null,
    fresh_hardWrapper_deductionAmount?: number | null,
    fresh_degradedUnwanted_acceptablePercentage?: number | null,
    fresh_degradedUnwanted_bale1WeightTestResults?: number | null,
    fresh_degradedUnwanted_bale2WeightTestResults?: number | null,
    fresh_degradedUnwanted_average?: number | null,
    fresh_degradedUnwanted_deductions?: number | null,
    fresh_degradedUnwanted_rate?: number | null,
    fresh_degradedUnwanted_deductionAmount?: number | null,
    fresh_other_acceptablePercentage?: number | null,
    fresh_other_bale1WeightTestResults?: number | null,
    fresh_other_bale2WeightTestResults?: number | null,
    fresh_other_average?: number | null,
    fresh_other_deductions?: number | null,
    fresh_other_rate?: number | null,
    fresh_other_deductionAmount?: number | null,

    // Green
    green_bale1recoredWeight: number | null,
    green_packaging_bale1WeightTestResults?: number | null,
    green_packaging_rate?: number | null,
    green_packaging_deductionAmount?: number | null,
    green_pvcPc_bale1WeightTestResults?: number | null,
    green_pvcPc_rate?: number | null,
    green_pvcPc_deductionAmount?: number | null,
    green_ppPe_bale1WeightTestResults?: number | null,
    green_ppPe_rate?: number | null,
    green_ppPe_deductionAmount?: number | null,
    green_coloredBottles_bale1WeightTestResults?: number | null,
    green_coloredBottles_rate?: number | null,
    green_coloredBottles_deductionAmount?: number | null,
    green_metal_bale1WeightTestResults?: number | null,
    green_metal_rate?: number | null,
    green_metal_deductionAmount?: number | null,
    green_oilPaintBottles_bale1WeightTestResults?: number | null,
    green_oilPaintBottles_rate?: number | null,
    green_oilPaintBottles_deductionAmount?: number | null,
    green_20LtdJars_bale1WeightTestResults?: number | null,
    green_20LtdJars_rate?: number | null,
    green_20LtdJars_deductionAmount?: number | null,
    green_dustMudSoil_bale1WeightTestResults?: number | null,
    green_dustMudSoil_rate?: number | null,
    green_dustMudSoil_deductionAmount?: number | null,
    green_moisure_bale1WeightTestResults?: number | null,
    green_moisure_rate?: number | null,
    green_moisure_deductionAmount?: number | null,
    green_dirtyBottles_bale1WeightTestResults?: number | null,
    green_dirtyBottles_rate?: number | null,
    green_dirtyBottles_deductionAmount?: number | null,
    green_hardWrapper_bale1WeightTestResults?: number | null,
    green_hardWrapper_rate?: number | null,
    green_hardWrapper_deductionAmount?: number | null,
    green_degradedUnwanted_bale1WeightTestResults?: number | null,
    green_degradedUnwanted_rate?: number | null,
    green_degradedUnwanted_deductionAmount?: number | null,
    green_other_bale1WeightTestResults?: number | null,
    green_other_rate?: number | null,
    green_other_deductionAmount?: number | null,

    isRejected: boolean,
}

const InitialQCSchema = new Schema<InitialQC>({
    // key
    loadId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    
    // Inchanrges
    qcChemist: {
        type: String,
    },
    qcHead: {
        type: String
    },

    // Mixed
    mixed_bale1recoredWeight: {
        type: Number,
        default: null
    },
    mixed_bale2recoredWeight: {
        type: Number,
        default: null
    },
    mixed_packaging_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_packaging_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_packaging_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_packaging_average: {
        type: Number,
        default: null
    },
    mixed_packaging_deductions: {
        type: Number,
        default: null
    },
    mixed_packaging_rate: {
        type: Number,
        default: null
    },
    mixed_packaging_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_pvcPc_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_pvcPc_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_pvcPc_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_pvcPc_average: {
        type: Number,
        default: null
    },
    mixed_pvcPc_deductions: {
        type: Number,
        default: null
    },
    mixed_pvcPc_rate: {
        type: Number,
        default: null
    },
    mixed_pvcPc_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_ppPe_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_ppPe_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_ppPe_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_ppPe_average: {
        type: Number,
        default: null
    },
    mixed_ppPe_deductions: {
        type: Number,
        default: null
    },
    mixed_ppPe_rate: {
        type: Number,
        default: null
    },
    mixed_ppPe_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_coloredBottles_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_coloredBottles_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_coloredBottles_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_coloredBottles_average: {
        type: Number,
        default: null
    },
    mixed_coloredBottles_deductions: {
        type: Number,
        default: null
    },
    mixed_coloredBottles_rate: {
        type: Number,
        default: null
    },
    mixed_coloredBottles_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_metal_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_metal_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_metal_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_metal_average: {
        type: Number,
        default: null
    },
    mixed_metal_deductions: {
        type: Number,
        default: null
    },
    mixed_metal_rate: {
        type: Number,
        default: null
    },
    mixed_metal_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_oilPaintBottles_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_oilPaintBottles_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_oilPaintBottles_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_oilPaintBottles_average: {
        type: Number,
        default: null
    },
    mixed_oilPaintBottles_deductions: {
        type: Number,
        default: null
    },
    mixed_oilPaintBottles_rate: {
        type: Number,
        default: null
    },
    mixed_oilPaintBottles_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_20LtdJars_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_20LtdJars_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_20LtdJars_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_20LtdJars_average: {
        type: Number,
        default: null
    },
    mixed_20LtdJars_deductions: {
        type: Number,
        default: null
    },
    mixed_20LtdJars_rate: {
        type: Number,
        default: null
    },
    mixed_20LtdJars_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_dustMudSoil_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_dustMudSoil_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_dustMudSoil_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_dustMudSoil_average: {
        type: Number,
        default: null
    },
    mixed_dustMudSoil_deductions: {
        type: Number,
        default: null
    },
    mixed_dustMudSoil_rate: {
        type: Number,
        default: null
    },
    mixed_dustMudSoil_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_moisure_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_moisure_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_moisure_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_moisure_average: {
        type: Number,
        default: null
    },
    mixed_moisure_deductions: {
        type: Number,
        default: null
    },
    mixed_moisure_rate: {
        type: Number,
        default: null
    },
    mixed_moisure_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_dirtyBottles_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_dirtyBottles_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_dirtyBottles_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_dirtyBottles_average: {
        type: Number,
        default: null
    },
    mixed_dirtyBottles_deductions: {
        type: Number,
        default: null
    },
    mixed_dirtyBottles_rate: {
        type: Number,
        default: null
    },
    mixed_dirtyBottles_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_hardWrapper_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_hardWrapper_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_hardWrapper_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_hardWrapper_average: {
        type: Number,
        default: null
    },
    mixed_hardWrapper_deductions: {
        type: Number,
        default: null
    },
    mixed_hardWrapper_rate: {
        type: Number,
        default: null
    },
    mixed_hardWrapper_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_degradedUnwanted_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_degradedUnwanted_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_degradedUnwanted_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_degradedUnwanted_average: {
        type: Number,
        default: null
    },
    mixed_degradedUnwanted_deductions: {
        type: Number,
        default: null
    },
    mixed_degradedUnwanted_rate: {
        type: Number,
        default: null
    },
    mixed_degradedUnwanted_deductionAmount: {
        type: Number,
        default: null
    },
    mixed_other_acceptablePercentage: {
        type: Number,
        default: null
    },
    mixed_other_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_other_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    mixed_other_average: {
        type: Number,
        default: null
    },
    mixed_other_deductions: {
        type: Number,
        default: null
    },
    mixed_other_rate: {
        type: Number,
        default: null
    },
    mixed_other_deductionAmount: {
        type: Number,
        default: null
    },

    // Fresh
    fresh_bale1recoredWeight: {
        type: Number,
        default: null
    },
    fresh_bale2recoredWeight: {
        type: Number,
        default: null
    },
    fresh_packaging_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_packaging_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_packaging_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_packaging_average: {
        type: Number,
        default: null
    },
    fresh_packaging_deductions: {
        type: Number,
        default: null
    },
    fresh_packaging_rate: {
        type: Number,
        default: null
    },
    fresh_packaging_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_pvcPc_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_pvcPc_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_pvcPc_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_pvcPc_average: {
        type: Number,
        default: null
    },
    fresh_pvcPc_deductions: {
        type: Number,
        default: null
    },
    fresh_pvcPc_rate: {
        type: Number,
        default: null
    },
    fresh_pvcPc_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_ppPe_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_ppPe_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_ppPe_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_ppPe_average: {
        type: Number,
        default: null
    },
    fresh_ppPe_deductions: {
        type: Number,
        default: null
    },
    fresh_ppPe_rate: {
        type: Number,
        default: null
    },
    fresh_ppPe_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_coloredBottles_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_coloredBottles_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_coloredBottles_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_coloredBottles_average: {
        type: Number,
        default: null
    },
    fresh_coloredBottles_deductions: {
        type: Number,
        default: null
    },
    fresh_coloredBottles_rate: {
        type: Number,
        default: null
    },
    fresh_coloredBottles_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_metal_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_metal_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_metal_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_metal_average: {
        type: Number,
        default: null
    },
    fresh_metal_deductions: {
        type: Number,
        default: null
    },
    fresh_metal_rate: {
        type: Number,
        default: null
    },
    fresh_metal_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_oilPaintBottles_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_oilPaintBottles_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_oilPaintBottles_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_oilPaintBottles_average: {
        type: Number,
        default: null
    },
    fresh_oilPaintBottles_deductions: {
        type: Number,
        default: null
    },
    fresh_oilPaintBottles_rate: {
        type: Number,
        default: null
    },
    fresh_oilPaintBottles_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_20LtdJars_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_20LtdJars_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_20LtdJars_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_20LtdJars_average: {
        type: Number,
        default: null
    },
    fresh_20LtdJars_deductions: {
        type: Number,
        default: null
    },
    fresh_20LtdJars_rate: {
        type: Number,
        default: null
    },
    fresh_20LtdJars_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_dustMudSoil_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_dustMudSoil_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_dustMudSoil_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_dustMudSoil_average: {
        type: Number,
        default: null
    },
    fresh_dustMudSoil_deductions: {
        type: Number,
        default: null
    },
    fresh_dustMudSoil_rate: {
        type: Number,
        default: null
    },
    fresh_dustMudSoil_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_moisure_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_moisure_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_moisure_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_moisure_average: {
        type: Number,
        default: null
    },
    fresh_moisure_deductions: {
        type: Number,
        default: null
    },
    fresh_moisure_rate: {
        type: Number,
        default: null
    },
    fresh_moisure_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_dirtyBottles_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_dirtyBottles_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_dirtyBottles_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_dirtyBottles_average: {
        type: Number,
        default: null
    },
    fresh_dirtyBottles_deductions: {
        type: Number,
        default: null
    },
    fresh_dirtyBottles_rate: {
        type: Number,
        default: null
    },
    fresh_dirtyBottles_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_hardWrapper_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_hardWrapper_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_hardWrapper_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_hardWrapper_average: {
        type: Number,
        default: null
    },
    fresh_hardWrapper_deductions: {
        type: Number,
        default: null
    },
    fresh_hardWrapper_rate: {
        type: Number,
        default: null
    },
    fresh_hardWrapper_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_degradedUnwanted_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_degradedUnwanted_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_degradedUnwanted_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_degradedUnwanted_average: {
        type: Number,
        default: null
    },
    fresh_degradedUnwanted_deductions: {
        type: Number,
        default: null
    },
    fresh_degradedUnwanted_rate: {
        type: Number,
        default: null
    },
    fresh_degradedUnwanted_deductionAmount: {
        type: Number,
        default: null
    },
    fresh_other_acceptablePercentage: {
        type: Number,
        default: null
    },
    fresh_other_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_other_bale2WeightTestResults: {
        type: Number,
        default: null
    },
    fresh_other_average: {
        type: Number,
        default: null
    },
    fresh_other_deductions: {
        type: Number,
        default: null
    },
    fresh_other_rate: {
        type: Number,
        default: null
    },
    fresh_other_deductionAmount: {
        type: Number,
        default: null
    },

    // Green
    green_bale1recoredWeight: {
        type: Number,
        default: null
    },
    green_packaging_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_packaging_rate: {
        type: Number,
        default: null
    },
    green_packaging_deductionAmount: {
        type: Number,
        default: null
    },
    green_pvcPc_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_pvcPc_rate: {
        type: Number,
        default: null
    },
    green_pvcPc_deductionAmount: {
        type: Number,
        default: null
    },
    green_ppPe_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_ppPe_rate: {
        type: Number,
        default: null
    },
    green_ppPe_deductionAmount: {
        type: Number,
        default: null
    },
    green_coloredBottles_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_coloredBottles_rate: {
        type: Number,
        default: null
    },
    green_coloredBottles_deductionAmount: {
        type: Number,
        default: null
    },
    green_metal_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_metal_rate: {
        type: Number,
        default: null
    },
    green_metal_deductionAmount: {
        type: Number,
        default: null
    },
    green_oilPaintBottles_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_oilPaintBottles_rate: {
        type: Number,
        default: null
    },
    green_oilPaintBottles_deductionAmount: {
        type: Number,
        default: null
    },
    green_20LtdJars_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_20LtdJars_rate: {
        type: Number,
        default: null
    },
    green_20LtdJars_deductionAmount: {
        type: Number,
        default: null
    },
    green_dustMudSoil_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_dustMudSoil_rate: {
        type: Number,
        default: null
    },
    green_dustMudSoil_deductionAmount: {
        type: Number,
        default: null
    },
    green_moisure_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_moisure_rate: {
        type: Number,
        default: null
    },
    green_moisure_deductionAmount: {
        type: Number,
        default: null
    },
    green_dirtyBottles_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_dirtyBottles_rate: {
        type: Number,
        default: null
    },
    green_dirtyBottles_deductionAmount: {
        type: Number,
        default: null
    },
    green_hardWrapper_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_hardWrapper_rate: {
        type: Number,
        default: null
    },
    green_hardWrapper_deductionAmount: {
        type: Number,
        default: null
    },
    green_degradedUnwanted_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_degradedUnwanted_rate: {
        type: Number,
        default: null
    },
    green_degradedUnwanted_deductionAmount: {
        type: Number,
        default: null
    },
    green_other_bale1WeightTestResults: {
        type: Number,
        default: null
    },
    green_other_rate: {
        type: Number,
        default: null
    },
    green_other_deductionAmount: {
        type: Number,
        default: null
    },

    isRejected: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model('InitialQC', InitialQCSchema);