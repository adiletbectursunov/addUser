import React, { useState } from "react"
import Card from "../../UI/Card"
import Button from "../../UI/Button"
import classes from "./AddUser.module.css"
import ErrorModal from "../../UI/ErrorModal"

const AddUser = (props) => {

   const [userName, setUserName] = useState('')
   const [age, setAge] = useState('')
   const [error, setError] = useState(null)

   const userNameChangeHandler = (event) => {
    setUserName(event.target.value)
   }
   
   const userAgeChangeHandler = (event) => {
    setAge(event.target.value)
   }

   const sumbitHandler = (event) => {
    event.preventDefault()
    if (userName.trim().length === 0 || age.length === 0) {
        setError({
            title: 'Invalid input',
            message: 'No userName and age input has zero values'
        })
        return 
    }

    if (+age < 1 ){
        return
    }
    props.onAddUsers(userName, age)

     setUserName('')
     setAge('')

   }

   const closeModalHandler = () => {
    setError(null)
   }

    return (
        <React.Fragment>
    {error &&  <ErrorModal 
    title={error.title} 
    message={error.message} 
    onConfirm={closeModalHandler}/>}

<Card className={classes.input}>
    <form onSubmit={sumbitHandler}>
    <label htmlFor="username">User Name</label>
    <input id="username" type="text" onChange={userNameChangeHandler} value={userName}/>
    <label htmlFor="age"> User Age(in years)</label>
    <input  id="age"  type="number" onChange={userAgeChangeHandler} value={age}/>
    <Button type="submit">Add user</Button>
</form>
        </Card>
        </React.Fragment>
       
 
    ) 
}


export default AddUser