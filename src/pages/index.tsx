import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { ClinicsCheck } from "../components/ClinicsCheck";
import { Form } from "../components/Form";
import { Box } from "../components/Box";
import { TableLaudos } from "../components/TableLaudos";
import Laudo from "../core/laudo";
import { createClinicsCheck } from "../functions/createClinicsCheck";
import ClinicaModel from "../core/Clinica";
import { createBoxs } from "../functions/createBoxes";


export default function Home() {

  const [laudo, setLaudo] = useState<Laudo>(Laudo.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  
  const [clinicasSelecionadas, setClinicasSelecionadas] = useState([])
  const [boxsSelecionados, setBoxsSelecionados] = useState([])


  const laudos = [
    new Laudo('Renan Luís Romagnoli Silveira', 123890567, 'Ortopedia', 'HAGF', 'HNSD', []),
    new Laudo('Rodrigo Brum', 123890789, 'Uti', 'HNSD', 'HPJM', []),
    new Laudo('Alysson Bárcia', 123832467, 'Cardio/Neuro/Nefro', 'HCL', 'BH', []),
    new Laudo('Rodrigo Generoso', 123898565, 'Pediatria', 'HAGF', 'HSS', []),
  ]

  useEffect(() => {
    setBoxsSelecionados(createBoxs(clinicasSelecionadas))
    renderBoxes()
  }, [clinicasSelecionadas])

  function renderBoxes() {
    const boxsToRender = boxsSelecionados
    // const boxs = createBoxs(clinicasSelecionadas)
    console.log('renderBoxes... ', boxsToRender)
    return boxsToRender.map((clinica, i) => <Box key={i} title={clinica.title} laudos={laudos} />)
  }

  return (
    <div className={`
      flex
      flex-col
      justify-around items-center
      h-full
      bg-gradient-to-r from-blue-300 to-blue-500
    `}>
      <ClinicsCheck clinicas={clinicasSelecionadas} onChange={(selecaoClinicas: Array<string>) => setClinicasSelecionadas(selecaoClinicas)}/>
      {boxsSelecionados && renderBoxes()}
      {/* {clinicasSelecionadas?.map((clinica, i) => <Box key={i} title={clinica} laudos={laudos} />)} */}
    </div>
  )
}
