interface EntryProps {
    type?: 'text' | 'number'
    title: string
    value: any
    readonly?: boolean
    changedValue?: (value: any) => void

}

export function Entry(props: EntryProps) {
    return (
        <div 
            className={`
                flex flex-col
                p-3
            `}
        >
            <label className="mb-2">
                {props.title}
            </label>
            <input 
                type={props.type ?? 'text'} 
                value={props.value}
                readOnly={props.readonly}
                onChange={e => props.changedValue?.(e.target.value)}
                className={`
                    border border-blue-500
                    rounded-lg
                    focus:outline-none 
                    bg-blue-200
                    px-4
                    py-2
                    ${props.readonly ? '' : 'focus:bg-gray-50'}
                `}
            />
        </div>
    )
}