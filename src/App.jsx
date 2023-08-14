import MyComponent from "./components/MyComponent"
import MySecondComponent from "./components/MySecondComponent"
import Person from "./components/Person"
import Counter from "./components/Counter"
import UserForm from "./components/UserForm"
import { useState } from "react"


function App() {

  const [user,setUser]= useState({})

  return (
   
     <>
     <UserForm setUser={setUser} ></UserForm>
     <MyComponent user2={user } />

     {/* <Counter></Counter> */}

     {/* <Person firstName = {"Flogert"} lastName = " Ciku" age ={23} hColor = {"black"}></Person>
     <Person firstName = {"Flogert"} lastName = " Ciku" hColor = {"black"}></Person>
    <h2>this is a h2  </h2>
    <MySecondComponent valueA = {2} valueB={3} valueC = {"Flogert"}/>
    
    <MySecondComponent valueA = {5} valueB={7}  /> */}
     
    </>
  )
}

export default App
