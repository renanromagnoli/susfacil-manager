import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { TableLaudos } from "../components/TableLaudo";
import Laudo from "../core/laudo";

export default function Home() {

  const laudos = [
    new Laudo('Renan', 123890567, 'Ortopedia', 'HAGF', ''),
    new Laudo('Rodrigo', 123890789, 'Uti', 'HNSD', ''),
    new Laudo('Alysson', 123832467, 'Cardio/Neuro/Nefro', 'HCL', ''),
    new Laudo('Generoso', 123898565, 'Pediatria', 'HAGF', ''),
  ]

  function selectedLaudo(laudo: Laudo) {
    console.log(laudo.name, 'selecionado')
  }

  function deletedLaudo(laudo: Laudo) {
    console.log(laudo.name, ' deletado')
  }

  return (
    <div className={`
      flex
      justify-center items-center
      h-screen
      bg-gradient-to-r from-blue-300 to-blue-500
    `}>
      <Layout title="Cadastro">
        <div className="flex justify-end">
          <Button className="mb-4" color='blue'>
            Anotar Laudo
          </Button>
        </div>
        {/* <TableLaudos laudos={laudos} selectedLaudo={selectedLaudo} deletedLaudo={deletedLaudo}/> */}
        <Form laudo={laudos[0]}/>
      </Layout>
    </div>
  )
}
