const Person = (props) => {
    const {firstName,lastName,age,hColor} = props
    return(
        <>
        <h2>{lastName}, {firstName}</h2>
            <p>Age : {  age ? age : "i dont know yet"}</p>
            <p>Hair Color :  {hColor}</p>
        
        
        </>
    )
}

export default Person;