import { useState } from "react";
import { Button } from "../components/Button";
import { Clinics } from "../components/Clinics";
import { Form } from "../components/Form";
import { Box } from "../components/Box";
import { TableLaudos } from "../components/TableLaudos";
import Laudo from "../core/laudo";

export default function Home() {

  const [laudo, setLaudo] = useState<Laudo>(Laudo.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  
  const laudos = [
    new Laudo('Renan Luís Romagnoli Silveira', 123890567, 'Ortopedia', 'HAGF', 'HNSD', []),
    new Laudo('Rodrigo Brum', 123890789, 'Uti', 'HNSD', 'HPJM', []),
    new Laudo('Alysson Bárcia', 123832467, 'Cardio/Neuro/Nefro', 'HCL', 'BH', []),
    new Laudo('Rodrigo Generoso', 123898565, 'Pediatria', 'HAGF', 'HSS', []),
  ]

  const clinicas = [
    'Ortopedia', 
    'Cirurgia'
  ]

  function selectedLaudo(laudo: Laudo) {
    setLaudo(laudo)
    setVisible('form')
  }
  
  function newLaudo() {
    setLaudo(Laudo.empty())
    setVisible('form')
  }
  
  function saveLaudo(laudo: Laudo) {
    console.log(laudo)
    setVisible('table')
  }

  function deletedLaudo(laudo: Laudo) {
    console.log(laudo.name, ' deletado')
  }

  return (
    <div className={`
      flex
      flex-col
      justify-around items-center
      h-full
      bg-gradient-to-r from-blue-300 to-blue-500
    `}>
      <Clinics />
      {clinicas.map((clinica, i) => {
        return(
          <Box key={i} title={clinica}>
            { visible === 'table' 
              ? 
              (
                <>
                  {/* <div className="flex justify-end">
                    <Button className="mb-4" color='blue' onClick={newLaudo}>
                      Anotar Laudo
                    </Button>
                  </div> */}
                  <TableLaudos laudos={laudos} selectedLaudo={selectedLaudo} deletedLaudo={deletedLaudo}/>
                </>
              )
              : 
              (
                <Form 
                  laudo={laudo}
                  cancel={() => setVisible('table')}
                  changedLaudo={saveLaudo}
                />
              )
            }
          </Box>
        )
      })}
    </div>
  )
}
