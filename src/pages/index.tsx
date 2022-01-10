import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex
      justify-center items-center
      h-screen
      bg-gradient-to-r from-blue-300 to-blue-500
    `}>
      <Layout title="Cadastro">
        <span>Conteúdo</span>
      </Layout>
    </div>
  )
}
