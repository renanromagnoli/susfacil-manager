import Laudo from "../core/laudo";
import {DocumentAdd, ArrowIcon, InfoIcon, EditIcon, TrashIcon, CloseIcon } from "./Icons";

interface TableLaudosProps {
    laudos: Laudo[]
    selectedLaudo?: (laudo: Laudo) => void
    deletedLaudo?: (laudo: Laudo) => void
}

export function TableLaudos(props: TableLaudosProps) {

    const showActions = props.selectedLaudo || props.deletedLaudo

    function HeaderTableRender() {
        return (
            <tr>
                <th className="text-center"></th>
                <th className="text-center">Nº do Laudo</th>
                <th className="text-center">Nome</th>
                <th className="text-center">Origem</th>
                <th className="text-center">Destino</th>
                {showActions ? <th className="text-center">Ações</th> : false}
            </tr>

        )
    }

    function infoIconsRender(laudo: Laudo) {
        return (
            <td className="flex justify-center items-center px-2 py-1">
                <button>{InfoIcon}</button>
                {/* <button>{ArrowIcon}</button> */}
            </td>
        )
    }

    function dataRender() {
        return props.laudos?.map((laudo, index) => {
            return (
                <>
                    <tr key={index}
                        className={`
                            ${index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-100'}
                        `}>
                        {infoIconsRender(laudo)}
                        <td className="text-center p-2 text-blue-600">{laudo.number}</td>
                        <td className="text-left p-2">{laudo.name}</td>
                        <td className="text-center p-2">{laudo.from}</td>
                        <td className="text-center p-2">{laudo.to}</td>
                        {showActions ? actionsRender(laudo) : false}
                    </tr>
                    
                    {/* criar uma função para as anotações, referenciadas ao número do laudo */}
                    <tr className="bg-blue-600 text-gray-50">
                        {/* <div>15/01</div>
                        <div className="px-2">12:17h</div> */}
                        <td colSpan={6}>
                            <table className="w-full">
                                <tr>
                                    <td colSpan={5} className="px-2 py-1">
                                        Este laudo será aceito amanhã
                                    </td>
                                    <td className="flex justify-end items-center px-2 py-1">
                                        <button>{EditIcon}</button>
                                        <button>{CloseIcon}</button>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    {/* <tr className={`
                        relative
                        w-full bg-blue-700 text-gray-50
                        flex flex-col 
                        `}>
                        <tr className="flex p-2 w-full">

                            <td colSpan={5}>Este laudo será aceito amanhã</td>
                        </tr>
                        <tr className="flex p-2 w-full">
                        
                            <td colSpan={5}>Este laudo será aceito amanhã</td>
                        </tr>
                        <hr />
                    
                    </tr> */}
                </>
            )
        })
    }

    function actionsRender(laudo: Laudo) {
        return (
            <td className="flex text-center justify-center items-center">
                {props.selectedLaudo ? (
                    <button onClick={() => props.selectedLaudo?.(laudo)} className={`
                        text-green-800
                        hover:text-green-500
                        transition-all ease-in .2s
                    `}>{EditIcon}</button>
                    ) : false}
                <button>{DocumentAdd}</button>
                {props.deletedLaudo ? (
                    <button onClick={() => props.deletedLaudo?.(laudo)} className={`
                        text-red-900
                        hover:text-red-600
                        transition-all ease-in .2s
                    `}>{TrashIcon}</button>
                ) : false}
            </td>
        )
    }


    return (
        <table className="w-full">
            {/* {HeaderTableRender()}
            {dataRender()} */}
            <thead className={`
                bg-gradient-to-r from-blue-300 to-blue-400
                text-gray-50
            `}>
                {HeaderTableRender()}
            </thead>
            <tbody>
                {dataRender()}
            </tbody>
        </table>
    )
}