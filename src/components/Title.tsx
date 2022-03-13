import { Button } from "./Button";
import { AddLaudoIcon, DownloadFileIcon } from "./Icons";

export function Title(props) {

    function newLaudo() {
        // setLaudo(Laudo.empty())
        // setVisible('form')
        console.log('newLaudo')
      }

    return (
        <>
        <div className={`
        flex justify-between items-center py-1
        `}>
            <h1 className="px-3">{props.children}</h1>
            <div className="flex justify-end px-1">
                  <Button className='bg-blue-400
                hover:bg-blue-600 px-1 py-1' onClick={props.newLaudoButton}>
                    {AddLaudoIcon}
                  </Button>
                  <Button className='bg-gray-400
                hover:bg-green-600' onClick={newLaudo}>
                    {DownloadFileIcon}
                  </Button>
                  
                </div>
        </div>
        <hr className="border-2 border-blue-400"/>
        </>
    )
}