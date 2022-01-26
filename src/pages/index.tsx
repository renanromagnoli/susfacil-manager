import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Clinics } from "../components/Clinics";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { TableLaudos } from "../components/TableLaudos";
import Laudo from "../core/laudo";

export default function Home() {

  const [laudo, setLaudo] = useState<Laudo>(Laudo.empty())
  const [listLaudos, setListLaudos] = useState<Laudo[]>([])

  const [visible, setVisible] = useState<'table' | 'form'>('table')
  
  

  
  // useEffect(() => setListLaudos(laudos), [])

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
    let formLaudo = laudo
    console.log('Formlaudo:', formLaudo)

    let localLaudos = JSON.parse(localStorage.getItem('laudos')) || []
    // localLaudos.push([laudo.number, laudo.name, laudo.clinic, laudo.from, laudo.to])
    localLaudos.push({
      number: laudo.number, 
      name: laudo.name, 
      clinic: laudo.clinic, 
      from: laudo.from, 
      to: laudo.to
    })
    // let laudosList = listLaudos
    // laudosList.push(formLaudo)
    setListLaudos(localLaudos)
    localStorage.setItem('laudos', JSON.stringify(localLaudos))

    setVisible('table')
  }

  function deletedLaudo(laudo: Laudo) {
    console.log(laudo.name, ' deletado')
  }

  return (
    <div className={`
      flex
      flex-col
      justify-center items-center
      h-screen
      bg-gradient-to-r from-blue-300 to-blue-500
    `}>
      <Clinics />
      <Layout title="Ortopedia">
        { visible === 'table' 
          ? (
              <>
                <div className="flex justify-end">
                  <Button className="mb-4" color='blue' onClick={newLaudo}>
                    Anotar Laudo
                  </Button>
                </div>
                <TableLaudos laudos={listLaudos} selectedLaudo={selectedLaudo} deletedLaudo={deletedLaudo}/>
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
      </Layout>
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