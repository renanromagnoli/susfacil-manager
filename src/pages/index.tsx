import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { ClinicsCheck } from "../components/ClinicsCheck";
import { Form } from "../components/Form";
import { Box } from "../components/Box";
import  TableLaudos  from "../components/TableLaudos";
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
    renderBoxes()
  }, [boxsSelecionados])
  
  function boxsListToClassList(list) {
    let boxToCreate = createBoxs(list)
    setBoxsSelecionados(boxToCreate)
  }
  
  function renderBoxes() {
    const boxsToRender = boxsSelecionados
    // const boxs = createBoxs(clinicasSelecionadas)
    console.log('RENDER Boxes... ', boxsToRender)
    return boxsToRender.map((clinica, i) => <Box key={i} title={clinica.title} laudos={laudos} />)
  }
  
  function buildingBoxsToRender(selecaoClinicas) {
    setClinicasSelecionadas(selecaoClinicas)
    setBoxsSelecionados(createBoxs(selecaoClinicas))
  }

  return (
    <div className={`
      flex
      flex-col
      justify-start items-center
      h-full
    `}>
      <ClinicsCheck clinicas={clinicasSelecionadas} onChange={(selecaoClinicas: Array<string>) => buildingBoxsToRender(selecaoClinicas)}/>
      {boxsSelecionados.length > 0 && renderBoxes()}
      {/* {clinicasSelecionadas?.map((clinica, i) => <Box key={i} title={clinica} laudos={laudos} />)} */}
    </div>
  )
}
