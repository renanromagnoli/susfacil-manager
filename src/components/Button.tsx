interface ButtonProps {
    children: any
    className?: string
    color?: 'green' | 'blue' | 'gray'
}

export function Button(props: ButtonProps) {

    const color = props.color ?? 'blue'

    return (
        <button 
            className={`
                bg-blue-800
                hover:bg-blue-600
                text-gray-50
                rounded-md
                px-4
                py-2
                m-1
                ${props.className}
            `}
        >
            {props.children}
        </button>
    )
}