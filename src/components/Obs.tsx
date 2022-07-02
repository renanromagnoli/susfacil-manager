import ObsModel from "../core/obs"
import { EditIcon, CloseIcon } from "./Icons"

interface ObsProps {
    obs?: ObsModel
    onChange: (newObs: ObsModel) => void
}

export default function Obs(props: ObsProps) {
    const {obs} = props

    function editText() {
        console.log(obs, 'editado!')
    }

    function deleteText() {
        console.log(obs, 'excluído')
    }

    return (
        <div>
            <table className="w-full">
                <tr>
                    <td colSpan={5} className="px-2 py-1">
                        Este laudo será aceito amanhã
                    </td>
                    <td className="flex justify-end items-center px-2 py-1">
                        <button onClick={editText}>{EditIcon}</button>
                        <button onClick={deleteText}>{CloseIcon}</button>
                    </td>
                </tr>
            </table>
            
        </div>
    )
}