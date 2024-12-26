import { useState } from "react";

function Person()
{
    let [person, SetPerson] = useState
    (
        {
            firstName:"Walter",
            lastName:"White"
        }
    )
    function rename()
    {
        SetPerson({firstName:"Mister", lastName:person.lastName})
    }
    return(
        <div>
            <p>{person.firstName} {person.lastName}</p>
            <button onClick={rename}>Rename</button>
        </div>
    )
}

export default Person;