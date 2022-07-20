import { useEffect, useState } from "react"
import  ClinicaModel from "../core/Clinica"
import { createClinicsCheck } from "../functions/createClinicsCheck"

interface ClinicaProps {
    clinica: ClinicaModel[]
    onChange(): (clinicas: Array<string>) => void
}

// 
export function ClinicsCheck({clinicas, onChange}) {

    const clinicsOptions = createClinicsCheck()
    
    let clinicsSelected = clinicas

    function handleClinica(e) {
        
        const clinicaCheck = e.target.value

        console.log('clinicsSelected antes: ', clinicsSelected)
        
        clinicsSelected.includes(clinicaCheck) 
            ? clinicsSelected.splice(clinicsSelected.indexOf(clinicaCheck), 1)
            : clinicsSelected.push(clinicaCheck)
        
        console.log('Check:', clinicaCheck)
        console.log('clinicsSelected depois: ', clinicsSelected)
        
        onChange(clinicsSelected)
    }

    function renderClinicsChecks() {
        console.log('Renderizando os ClinicsCheck...')
        return clinicsOptions.map((clinic, i) => {
            return (
                <div>
                    <input key={i} type="checkbox" id={clinic.id} name={clinic.titulo} value={clinic.titulo} onChange={e => handleClinica(e)}/> <label htmlFor={clinic.id}>{clinic.titulo}</label>
                </div>
            )
        })
    }
    
    {/* <input type="checkbox" id="clinica-geral" name="clinica" value={'clinica-geral'}  checked={check} onChange={(e) => handleClinicaGeral(e.target.value)}/> <label htmlFor="clinica-geral">Clínica Geral</label> */}


    return (
        <div className="flex w-full bg-blue-100 p-4 justify-evenly text-gray-600">
            {renderClinicsChecks()}
        </div>
    )
}