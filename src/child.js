const Childcompont = (props) => {
    const { name, age } = props
    return (
        <p>{name}이고 {age}살 입니다.</p>
    )
}

export default Childcompont