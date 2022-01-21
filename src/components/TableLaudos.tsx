import Laudo from "../core/laudo";
import {DocumentAdd, ArrowIcon, InfoIcon, PencilIcon, TrashIcon } from "./Icons";

interface TableLaudosProps {
    laudos: Laudo[]
    selectedLaudo?: (laudo: Laudo) => void
    deletedLaudo?: (laudo: Laudo) => void
}

export function TableLaudos(props: TableLaudosProps) {

    const showActions = props.selectedLaudo || props.deletedLaudo

    function HeaderTableRender() {
        return (
            <>
                <div className="text-center"></div>
                <div className="text-center">Nº do Laudo</div>
                <div className="text-center">Nome</div>
                <div className="text-center">Origem</div>
                <div className="text-center">Destino</div>
                {showActions ? <div className="text-center">Ações</div> : false}
            </>

        )
    }

    function infoIconsRender(laudo: Laudo) {
        return (
            <div className="flex justify-center content-center">
                <button>{InfoIcon}</button>
                <button>{ArrowIcon}</button>
            </div>
        )
    }
    function dataRender() {
        return props.laudos?.map((laudo, index) => {
            return (
                <>
                    <div key={laudo.id}
                        className={`
                            ${index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-100'}
                        `}>
                        {infoIconsRender(laudo)}
                        <div className="text-center p-2 text-blue-600">{laudo.number}</div>
                        <div className="text-left p-2">{laudo.name}</div>
                        <div className="text-center p-2">{laudo.from}</div>
                        <div className="text-center p-2">{laudo.to}</div>
                        {showActions ? actionsRender(laudo) : false}
                    </div>
                    <div className={`
                        relative
                        w-full bg-blue-700 text-gray-50
                        flex flex-col 
                        `}>
                        <div className="flex p-2 w-full">
                            {/* <div>15/01</div>
                            <div className="px-2">12:17h</div> */}
                            <div className="bg-red-600 w-full">Este laudo será aceito amanhã</div>
                        </div>
                        <div className="flex p-2 w-full">
                            {/* <div>15/01</div>
                            <div className="px-2">12:17h</div> */}
                            <div>Este laudo será aceito amanhã</div>
                        </div>
                        <hr />
                        {/* <div >
                            <div>15/01 12:17h</div>
                            <div>Este laudo será aceito amanhã</div>
                        </div> */}
                    </div>
                </>
            )
        })
    }

    function actionsRender(laudo: Laudo) {
        return (
            <div className="flex text-center justify-center items-center">
                {props.selectedLaudo ? (
                    <button onClick={() => props.selectedLaudo?.(laudo)} className={`
                        text-green-800
                        hover:text-green-500
                        transition-all ease-in .2s
                    `}>{PencilIcon}</button>
                    ) : false}
                <button>{DocumentAdd}</button>
                {props.deletedLaudo ? (
                    <button onClick={() => props.deletedLaudo?.(laudo)} className={`
                        text-red-900
                        hover:text-red-600
                        transition-all ease-in .2s
                    `}>{TrashIcon}</button>
                ) : false}
            </div>
        )
    }


    return (
        <div className={`
            grid
            grid-cols-6
            rounded-xl overflow-hidden
        `}>
            {HeaderTableRender()}
            {dataRender()}
            {/* <div className={`
                bg-gradient-to-r from-blue-300 to-blue-400
                text-gray-50
            `}>
                {HeaderTableRender()}
            </div>
            <div>
                {dataRender()}
            </div> */}
        </div>
    )
}