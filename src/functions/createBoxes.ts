import { BoxModel} from "../core/Box";

export function createBoxs(selectedClinics): BoxModel[] {
    let clinics = selectedClinics
    return clinics.map((clinic, i: number) => {
        return new BoxModel(i, clinic.title, clinic.laudos, clinic.color)
    })
    }
