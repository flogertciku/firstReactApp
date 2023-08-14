import { useState } from "react";
const Counter = (props) =>{
    const [numri, vendosNumrin] = useState("Flogert");
    const [clicked, setClicked]=useState(false)
    const [allValues,setAllValues]= useState([])
    
    
    console.log("i am here ")



    const handleClick = ()=>{
       
        vendosNumrin(numri + 1)
        setClicked(!clicked)
        setAllValues([...allValues,numri])
        
    }
    return (
        <> 
        <h2>{numri} </h2> 
        <p>{allValues}</p>
        
        <button onClick={ handleClick }>Click Me {JSON.stringify(clicked) }

        
        
         </button>
        </>
    )
}
export default Counter;