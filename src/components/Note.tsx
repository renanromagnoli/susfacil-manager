import { Title } from "./Title"

interface NoteProps {
    title: string
    children: any
}

export function Note(props: NoteProps) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-blue-900
            rounded-md
            my-3
        `}>
            <Title newLaudoButton={props.newLaudo}>{props.title}</Title>
            
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}