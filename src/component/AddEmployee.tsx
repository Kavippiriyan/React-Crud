import { useState } from "react"
import './AddEmployee.css'
import { IEmployee } from "./Employee"

type Props =
    {
        onclickbackbtn: () => void
        onsubmitbutton: (data: IEmployee) => void
    }

export const AddEmployee = (props: Props) => {

    const {onclickbackbtn,onsubmitbutton}=props

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [Email, setEmail] = useState("")

    const handlefirstname = (e: any) => {
        setfirstname(e.target.value)
    }
    const handlelastname = (e: any) => {
        setlastname(e.target.value)
    }
    const handleemail = (e: any) => {
        setEmail(e.target.value)
    }

    const submithandle = (e:any) => {
        e.preventDefault()
        const data: IEmployee =
        {
            id: new Date().toJSON().toString(),
            firstname: firstname,
            lastname: lastname,
            email: Email
        }
        onsubmitbutton(data)
    }
    return (
        <form className="form" onSubmit={submithandle}>
            <h1 className="h1">Add Employee</h1>
            <label>First Name:</label>
            <input value={firstname} onChange={handlefirstname} />
            <label>Last Name:</label>
            <input value={lastname} onChange={handlelastname} />
            <label>EmailAddress:</label>
            <input value={Email} onChange={handleemail} />  
            <button onClick={props.onclickbackbtn} >Back</button>
            <button type="submit">Insert Employee</button>
        </form>
    )
}

export enum Enumlist {
    list,
    add,
    edit
}