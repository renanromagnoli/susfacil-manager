import { memo } from "react"
import ObsModel from "../core/obs"
import { EditIcon, CloseIcon } from "./Icons"
import {BsArrowReturnRight} from 'react-icons/bs'

interface ObsProps {
    obs?: ObsModel
    onChange: (newObs: ObsModel) => void
}

function Obs(props: ObsProps) {
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
                    <td className="px-5 py-1">
                        <BsArrowReturnRight />
                    </td>
                    <td colSpan={4} className="px-2 py-1"> 
                        <span>Este laudo será aceito amanhã.</span>
                    </td>
                    <td className="justify-end items-center px-2 py-1">
                        <button onClick={editText}>{EditIcon}</button>
                        <button onClick={deleteText}>{CloseIcon}</button>
                    </td>
                </tr>
            </table>
            
        </div>
    )
}

export default memo(Obs)