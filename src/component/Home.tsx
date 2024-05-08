import { useEffect, useState } from "react";
import { IEmployee } from './Employee'
import { Employeelist } from "./Employeelist";
import { AddEmployee, Enumlist } from "./AddEmployee";
import { EditEmployee } from "./EditEmployee";


const HomePage = () => {

    const [EmployeeList, setEmployeeList] = useState([] as IEmployee[])
    const [shownpage, setshownpage] = useState(Enumlist.list)
    const [datatoedit, setdatatoedit] = useState({} as IEmployee)

    useEffect(() => {
        const ListInString = window.localStorage.getItem("EmployeeList")
        if (ListInString) {
            _setEmployeeList(JSON.parse(ListInString))
        }
    }, [])

    const _setEmployeeList = (list: IEmployee[]) => {
        setEmployeeList(list);
        window.localStorage.setItem("EmployeeList", JSON.stringify(list))
    }

    const addemployee = () => {
        setshownpage(Enumlist.add)
    }

    const showlist = () => {
        setshownpage(Enumlist.list)
    }
    const Insertemployee = (data: IEmployee) => {
        _setEmployeeList([...EmployeeList, data])
    }
    const deleteemp = (data: IEmployee) => {
        const indexofdata = EmployeeList.indexOf(data)
        const splicedata = [...EmployeeList]

        splicedata.splice(indexofdata, 1)
        _setEmployeeList(splicedata)

    }


    const editpage = (data: IEmployee) => {
        setshownpage(Enumlist.edit)
        setdatatoedit(data)

    }

    const updatedata = (data: IEmployee) => {
        const filtereddata = EmployeeList.filter(x => x.id === data.id)[0]
        const indexofRecord = EmployeeList.indexOf(filtereddata)
        const tempdata = [...EmployeeList]
        tempdata[indexofRecord] = data
        _setEmployeeList(tempdata)

    }
    return (
        <>
            <h1>This is HomePage</h1>

            {shownpage === Enumlist.list &&
                <div>
                    <button onClick={addemployee}>Add Employee</button>
                    <Employeelist list={EmployeeList} Deleteemp={deleteemp} editemp={editpage} />
                </div>}
            {shownpage === Enumlist.add &&
                <div>
                    <button >Add Employee</button>
                    <AddEmployee onclickbackbtn={showlist} onsubmitbutton={Insertemployee} />
                </div>}

            {shownpage === Enumlist.edit &&
                <div>
                    <EditEmployee data={datatoedit} onclickbackbtn={showlist} updateclickbutton={updatedata} />
                </div>}



        </>
    )
}
export default HomePage;