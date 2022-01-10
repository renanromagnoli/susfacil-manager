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

  return (
    <div className={`
      flex
      justify-center items-center
      h-screen
      bg-gradient-to-r from-blue-300 to-blue-500
    `}>
      <Layout title="Cadastro">
        <TableLaudos laudos={laudos}></TableLaudos>
      </Layout>
    </div>
  )
}
