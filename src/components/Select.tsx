import { loadGetInitialProps } from "next/dist/shared/lib/utils";

interface SelectProps {
    value: string,
    changedValue?: (value: any) => void
}

export function Select(props) {
    return (
        <div className="
            flex flex-col
            p-3
        ">
            <label htmlFor="">Clínica:</label>
            <input className="
                border border-blue-500
                rounded-lg
                focus:outline-none 
                bg-blue-200
                px-4
                py-2
            "
            value={props.value}
            onChange={e => props.changedValue(e.target.value)}
            list="clinics" />
                <datalist id="clinics">
                    <option value="Cardio/Neuro/Nefro"></option>
                    <option value="Cirurgia Geral"></option>
                    <option value="Clínica Geral"></option>
                    {/* <option value="Cardiologia"></option>
                    <option value="Nefrologia"></option>
                    <option value="Neurologia"></option> */}
                    <option value="Ortopedia"></option>
                    <option value="Obstetrícia/Pediatria"></option>
                </datalist>
        </div>
    )
}