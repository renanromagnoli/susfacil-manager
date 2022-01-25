export const Clinics = () => {
    return (
        <div className="flex w-full bg-blue-100 p-4 justify-evenly text-gray-600">
            <div>
                <input type="checkbox" id="clinica-geral" name="clinica" /> <label htmlFor="clinica-geral">Clínica Geral</label>
            </div>
            <div>
                <input type="checkbox" id="clinica-geral" name="clinica" /> <label htmlFor="clinica-geral">Obstetrícia/Pediatria</label>
            </div>
            <div>
                <input type="checkbox" id="clinica-geral" name="clinica" /> <label htmlFor="clinica-geral">Cardio/Neuro/Nefro</label>
            </div>
            <div>
                <input type="checkbox" id="clinica-geral" name="clinica" /> <label htmlFor="clinica-geral">Ortopedia</label>
            </div>
            <div>
                <input type="checkbox" id="clinica-geral" name="clinica" /> <label htmlFor="clinica-geral">Cirurgia Geral</label>
            </div>
            <div>
                <input type="checkbox" id="clinica-geral" name="clinica" /> <label htmlFor="clinica-geral">Uti</label>
            </div>
        </div>
    )
}