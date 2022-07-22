import { useState } from "react"
import Laudo from "../core/laudo"
import { Form } from "./Form"
import { AddLaudoIcon } from "./Icons"
import  TableLaudos  from "./TableLaudos"
import { Title } from "./Title"

interface BoxProps {
    title: string
    // children: any
    laudos: Laudo[]
}

export function Box(props: BoxProps) {

    const [visible, setVisible] = useState<'table' | 'form'>('table')
    const [laudo, setLaudo] = useState<Laudo>(Laudo.empty())

    const {laudos} = props

    function selectedLaudo(laudo: Laudo) {
        setLaudo(laudo)
        setVisible('form')
        // console.log(laudo)
      }
      
      function newLaudo() {
        setLaudo(Laudo.empty())
        setVisible('form')
        // console.log(laudo)
      }
      
      function saveLaudo(laudo: Laudo) {
        // console.log(laudo)
        // setVisible('table')
        console.log(laudo)
      }
    
      function deletedLaudo(laudo: Laudo) {
        // console.log(laudo.name, ' deletado')
        console.log(laudo)
      }

      function renderBoxHeader() {
        return (
            <div className={`
                flex
                justify-between
                items-center
            `}>
                <div><Title>{props.title}</Title></div>
                <div className="mr-3">
                    <button onClick={newLaudo}>
                        {AddLaudoIcon}
                    </button>
                </div>
            </div>
        )   
      }

      function renderTableOrForm() {
        return (
            visible === 'table'
                ?   <div className="p-6">
                        <TableLaudos laudos={laudos} selectedLaudo={selectedLaudo} deletedLaudo={deletedLaudo}/>
                    </div>
                
                :   <Form 
                        laudo={laudo}
                        cancel={() => setVisible('table')}
                        changedLaudo={saveLaudo}
                    />
        )
      }

    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-blue-900
            rounded-md
            my-4
        `}>
            {renderBoxHeader()}
            {renderTableOrForm()}
        </div>
    )
}