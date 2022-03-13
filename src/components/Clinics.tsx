import { Button } from "./Button"
import { ShareIcon, TrashIcon, UploadIcon } from "./Icons"

export const Clinics = () => {
    return (
        <div className="flex w-full justify-start bg-blue-100 p-2">
            <div className="flex w-full justify-around items-center text-gray-600">
                <div className="flex items-center gap-1">
                    <input type="checkbox" id="clinica" name="clinica-geral" /> 
                    <label htmlFor="clinica-geral">Clínica Geral</label>
                </div>
                <div className="flex items-center gap-1">
                    <input type="checkbox" id="obst" name="obstetricia-pediatria" /> 
                    <label htmlFor="obst">Obstetrícia/Pediatria</label>
                </div>
                <div className="flex items-center gap-1">
                    <input type="checkbox" id="cardio" name="cardio-neuro-nefro" /> 
                    <label htmlFor="cardio">Cardio/Neuro/Nefro</label>
                </div>
                <div className="flex items-center gap-1">
                    <input type="checkbox" id="orto" name="ortopedia" /> 
                    <label htmlFor="orto">Ortopedia</label>
                </div>
                <div className="flex items-center gap-1">
                    <input type="checkbox" id="cirurgia" name="cirurgia" /> 
                    <label htmlFor="cirurgia">Cirurgia Geral</label>
                </div>
                <div className="flex items-center gap-1">
                    <input type="checkbox" id="uti" name="uti" /> 
                    <label htmlFor="uti">Uti</label>
                </div>
                <div className="flex justify-around items-center">
                    <Button className="flex gap-2 items-center bg-blue-800
                    hover:bg-blue-600">
                        {UploadIcon}
                    </Button>
                    <Button className="flex items-center bg-green-800
                            hover:bg-green-600 
                            mr-4">
                                {ShareIcon}
                    </Button>

                    <Button className="flex gap-2 items-center
                        bg-gray-800 hover:bg-red-600
                        transition-all .3s">
                    <div>{TrashIcon}</div> 
                    </Button>

                </div>
                
            </div>
        </div>
    )
}