import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Clinics } from "../components/Clinics";
import { Form } from "../components/Form";
import { TrashIcon } from "../components/Icons";
import { Note } from "../components/Note";
import { TableLaudos } from "../components/TableLaudos";
import Laudo from "../core/laudo";

export default function Home() {

  const [laudo, setLaudo] = useState<Laudo>(Laudo.empty())
  const [listLaudos, setListLaudos] = useState<Laudo[]>([])

  const [visible, setVisible] = useState<'table' | 'form'>('table')
  
  

  
  // useEffect(() => setListLaudos(laudos), [])

  useEffect(() => setListLaudos(JSON.parse(localStorage.getItem('laudos')) || []), [])

  useEffect(() => {
    renderTableOfLaudos()
  }, listLaudos)

  // useEffect(() => {
  //   localStorage.setItem('laudos', JSON.stringify(listLaudos))
  // }, listLaudos)

  function selectedLaudo(laudo: Laudo) {
    setLaudo(laudo)
    setVisible('form')
  }
  
  function newLaudo() {
    setLaudo(Laudo.empty())
    setVisible('form')
  }
  
  function saveLaudo(laudo: Laudo) {
    // let formLaudo = laudo
    // console.log('Formlaudo:', formLaudo)

    let formLaudo = {
      number: +laudo.number, 
      name: laudo.name, 
      clinic: laudo.clinic, 
      from: laudo.from, 
      to: laudo.to
    }

    // setListLaudos(JSON.parse(localStorage.getItem('laudos')) || [])
    // setListLaudos(JSON.parse(localStorage.getItem('laudos')) || [])
    // localLaudos.push([laudo.number, laudo.name, laudo.clinic, laudo.from, laudo.to])


    let localLaudos = JSON.parse(localStorage.getItem('laudos')) || []

    const existsLaudo = localLaudos.find(l => l.number === +laudo.number)
    // console.log('exists:', existsLaudo)
    if (existsLaudo) {
      const index = localLaudos.indexOf(existsLaudo)
      localLaudos.splice(index, 1, formLaudo)
      // localLaudos.includes(formLaudo, index)
  
    } else {
      localLaudos.push(formLaudo)
    }
    // localLaudos.push(formLaudo)
    // let laudosList = listLaudos
    // laudosList.push(formLaudo)
    setListLaudos(localLaudos)
    localStorage.setItem('laudos', JSON.stringify(localLaudos))

    setVisible('table')
  }

  function deletedLaudo(laudo: Laudo) {

    let atualList = listLaudos
    const indexToDelete = atualList.indexOf(laudo)
    console.log(laudo.name, ' deletado')
    atualList.splice(indexToDelete, 1)
    setListLaudos(atualList)
    localStorage.setItem('laudos', JSON.stringify(atualList))
    location.reload()
  }

  function renderTableOfLaudos() {
    return (
      <TableLaudos laudos={listLaudos} 
        selectedLaudo={selectedLaudo} deletedLaudo={deletedLaudo}/>
    )
  }

  return (
    <div className={`
      flex
      flex-col
      justify-start items-center
      h-screen
      bg-gradient-to-r from-blue-300 to-blue-500
    `}>
      <Clinics />
      <Note title="Ortopedia">
        { visible === 'table' 
          ? (
              <>
                <div className="flex justify-end">
                  <Button className='mb-4 bg-blue-800
                hover:bg-blue-600' onClick={newLaudo}>
                    Anotar Laudo
                  </Button>
                  
                </div>
                {renderTableOfLaudos()}
                <div className="flex justify-end">
                  <Button className='bg-orange-800
                hover:bg-orange-600 mt-4' onClick={newLaudo}>
                    Exportar
                  </Button>
                </div>
              </>
            )
        : (
            <Form 
              laudo={laudo}
              cancel={() => setVisible('table')}
              changedLaudo={saveLaudo}
            />
          )
        }
      </Note>
      <Button className="flex gap-2 items-center absolute bottom-0 right-0 bg-gray-800
                hover:bg-gray-600">Limpar Laudos {TrashIcon}</Button>
      
    </div>
  )
}


// export async function getServerSideProps() {
//   const laudos = [
//     // {nome: 'Arthur', idade: 9 },
//     // ['Renan Luís Romagnoli Silveira', 123890567, 'Ortopedia', 'HAGF', 'HNSD'],
//     new Laudo('Renan Luís Romagnoli Silveira', 123890567, 'Ortopedia', 'HAGF', 'HNSD'),
//     new Laudo('Rodrigo Brum', 123890789, 'Uti', 'HNSD', 'HPJM'),
//     new Laudo('Alysson Bárcia', 123832467, 'Cardio/Neuro/Nefro', 'HCL', 'BH'),
//     new Laudo('Rodrigo Generoso', 123898565, 'Pediatria', 'HAGF', 'HSS')
//   ]

//   let laudosOn = []

//   laudos.forEach(l => laudosOn.push(l))

//   return {
//     props: {
//       laudos: laudosOn
//     }
//   }
// }