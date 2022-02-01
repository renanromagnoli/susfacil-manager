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
                
                text-gray-50
                rounded-md
                px-4
                py-2
                m-1
                ${props.className}
            `}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}