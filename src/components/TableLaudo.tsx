import Laudo from "../core/laudo";

interface TableLaudosProps {
    laudos: Laudo[]
}

export function TableLaudos(props: TableLaudosProps) {

    function HeaderTableRender() {
        return (
            <tr>
                <th className="text-center">Código</th>
                <th className="text-center">Nome</th>
                <th className="text-center">Origem</th>
                <th className="text-center">Destino</th>
            </tr>

        )
    }

    function dataRender() {
        return props.laudos?.map((laudo, index) => {
            return (
                <tr key={laudo.id}
                    className={`
                        ${index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-100'}
                    `}
                >
                    <td className="text-center p-2">{laudo.number}</td>
                    <td className="text-left p-2">{laudo.name}</td>
                    <td className="text-center p-2">{laudo.from}</td>
                    <td className="text-center p-2">{laudo.to}</td>
                </tr>
            )
        })
    }

    return (
        <table className={`
            w-full
            rounded-xl overflow-hidden
        `}>
            <thead className={`
                bg-gradient-to-r from-blue-300 to-blue-400
                text-gray-50
            `}>
                {HeaderTableRender()}
            </thead>
            <tbody>
                {dataRender()}
            </tbody>
        </table>
    )
}