import  ClinicaModel  from "../core/Clinica"

export function createClinicsCheck() {
    const clinicasTitulos = ['Clínica Geral', 'Obstetrícia/Pediatria', 'Ortopedia', 'Cardio/Neuro/Nefro', 'Cirurgia', 'UTI']

    return clinicasTitulos.map((titulo: string) => {
        // const numero = i + 1
        return new ClinicaModel(titulo)
    })
}