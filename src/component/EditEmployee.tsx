import React, { useState } from 'react'
import { IEmployee } from './Employee'


type Props =
    {
        data: IEmployee,
        updateclickbutton: (data: IEmployee) => void
        onclickbackbtn: () => void

    }

export const EditEmployee = (props: Props) => {

    const { data,updateclickbutton } = props
    const [firstname, setfirstname] = useState(data.firstname)
    const [lastname, setlastname] = useState(data.lastname)
    const [Email, setEmail] = useState(data.email)

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
        const updatedata: IEmployee =
        {
            id: data.id,
            firstname: firstname,
            lastname: lastname,
            email: Email
        }
        updateclickbutton(updatedata)
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
            <button type="submit">Update Employee</button>
        </form>
    )
}
