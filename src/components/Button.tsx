interface ButtonProps {
    children: any
    className?: string
    // cor?: 'green' | 'blue' | 'gray'
    onClick?: () => void
}

export function Button(props: ButtonProps) {

    // const cor = props.cor ?? 'blue'

    return (
        <button 
            className={`
                flex
                justify-center
                items-center
                text-gray-50
                rounded-md
                m-1
                w-8
                h-8
                hover:shadow-sm
                ${props.className}
            `}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}