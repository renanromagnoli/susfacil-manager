import { AddLaudoIcon } from "./Icons"
import { Title } from "./Title"

interface BoxProps {
    title: string
    children: any
}

export function Box(props: BoxProps) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-blue-900
            rounded-md
            my-4
        `}>
            <div className={`
                flex
                justify-between
                items-center
            `}>
                <div><Title>{props.title}</Title></div>
                <div className="mr-3">
                    <button>
                        {AddLaudoIcon}
                    </button>
                </div>
            </div>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}