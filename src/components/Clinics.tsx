export const Clinics = () => {
    return (
        <div className="flex w-full justify-start bg-blue-100 p-2">
            <div className="flex w-full justify-evenly text-gray-600">
                <div>
                    <input type="checkbox" id="clinica" name="clinica-geral" /> 
                    <label htmlFor="clinica-geral">Clínica Geral</label>
                </div>
                <div>
                    <input type="checkbox" id="obst" name="obstetricia-pediatria" /> 
                    <label htmlFor="obst">Obstetrícia/Pediatria</label>
                </div>
                <div>
                    <input type="checkbox" id="cardio" name="cardio-neuro-nefro" /> 
                    <label htmlFor="cardio">Cardio/Neuro/Nefro</label>
                </div>
                <div>
                    <input type="checkbox" id="orto" name="ortopedia" /> 
                    <label htmlFor="orto">Ortopedia</label>
                </div>
                <div>
                    <input type="checkbox" id="cirurgia" name="cirurgia" /> 
                    <label htmlFor="cirurgia">Cirurgia Geral</label>
                </div>
                <div>
                    <input type="checkbox" id="uti" name="uti" /> 
                    <label htmlFor="uti">Uti</label>
                </div>
            </div>
        </div>
    )
}