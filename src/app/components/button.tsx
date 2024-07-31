interface IProps {
    text: string
}

function Button({ text }: IProps) {
    
    return (
        <button> {text} </button>
    )
}

export default Button