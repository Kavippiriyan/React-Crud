import React from 'react'
import { IEmployee } from './Employee'

type Props =
    {
        onclickclose: () => void
        data: IEmployee
    }

export const EmployeeModel = (props: Props) => {

    const { onclickclose, data } = props

    return (
        <>
            <button id="myBtn"></button>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onclickclose}>&times;</span>
                    <h3>Employee Data</h3>
                    <div>
                        <div>
                            <label>FirstName:{data.firstname}</label>
                        </div>
                        <div>
                            <label>LastName:{data.lastname}</label>
                        </div>
                        <div>
                            <label>Email:{data.email}</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
