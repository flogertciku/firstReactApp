const MySecondComponent = (props)=>{
   
    const {valueA, valueB,valueC} = props

    return(
        <>
        <h2>Your Name is {valueC}</h2>
        <p>the sum is {valueA + valueB }</p>
        <p>Hello firstName and Last Name  </p>
        </>
    )

}
export default MySecondComponent;