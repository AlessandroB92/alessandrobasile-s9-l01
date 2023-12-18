const Button = (props) => {
    return <button type ='button' onClick={() => alert(`I don't ${props.label}`)}>button 1</button>
}

export default Button;