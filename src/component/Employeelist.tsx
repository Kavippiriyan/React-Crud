import { useState } from 'react'
import { IEmployee } from './Employee'
import './Employeelist.css'
import { EmployeeModel } from "./EmployeeModel";

type Props = {
    list: IEmployee[]
    Deleteemp: (data: IEmployee) => void
    editemp: (data: IEmployee) => void
}

export const Employeelist = (props: Props) => {

    const { list, Deleteemp,editemp } = props

    const [viewemployee, setviewemployee] = useState(false)
    const [datatoshow, setdatatoshow] = useState(null as IEmployee | null)

    const viewbutton = (data: IEmployee) => {
        setdatatoshow(data)
        setviewemployee(true)
    }

    const onclickclosebtn = () => {
        setviewemployee(false)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {list.map((value) => {
                    console.log(value);

                    return (
                        <tr key={value.id}>
                            <td>{value.firstname} {value.lastname}</td>
                            <td>{value.email}</td>
                            <td>
                                <div>
                                    <button onClick={() => viewbutton(value)}>View</button>
                                    <button onClick={()=>editemp(value)}>Edit</button>
                                    <button onClick={() => Deleteemp(value)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    )

                })}
            </table>
            {viewemployee && datatoshow !== null && <EmployeeModel onclickclose={onclickclosebtn} data={datatoshow} />}
        </div>
    )
}