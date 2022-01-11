import { useState } from "react";
import Laudo from "../core/laudo";
import { Button } from "./Button";
import { Entry } from "./Entry";

interface FormProps {
    laudo: Laudo
    changedLaudo?: (laudo: Laudo) => void
    cancel?: () => void
}

export function Form(props: FormProps) {

    const id = props.laudo?.id ?? null

    const [numero, setNumero] = useState(props.laudo?.number ?? 0)
    const [nome, setNome] = useState(props.laudo?.name ?? '')
    const [clinica, setClinica] = useState(props.laudo?.clinic ?? '')
    const [origem, setOrigem] = useState(props.laudo?.from ?? '')
    const [destino, setDestino] = useState(props.laudo?.to ?? '')

    return (
        <div className={`
            bg-gray-100
            rounded-lg
        `}>
            <Entry title="Número" type="number" value={numero} changedValue={setNumero}/>
            <Entry title="Nome" value={nome} changedValue={setNome}/>
            <Entry title="Clínica" value={clinica} changedValue={setClinica}/>
            <Entry title="Origem" value={origem} changedValue={setOrigem}/>
            <Entry title="Destino" value={destino}  changedValue={setDestino}/>

            <div className="flex justify-end">
                <Button onClick={() => props.changedLaudo?.(new Laudo(nome, numero, clinica, origem, destino, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancel}>Cancelar</Button>
            </div>
        </div>
    )
}