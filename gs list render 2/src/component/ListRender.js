import React from 'react'


const collect = {
    "info": [
        { 'name': 'Rony', 'id': 109876, 'password': 'fhhf$5566%' },
        { 'name': 'Talukdar', 'id': 9910, 'password': 'werety^%$#%' },
        { 'name': 'Hardib', 'id': 98710, 'password': 'edfcvx23$%' },
        { 'name': 'Kawser', 'id': 900, 'password': 'fhhf#$%77%' },
    ],
    'Company': 'Tesla'
}
export default function ListRender() {

    const dict = collect.info.map((value) => (
        <div> Name:{value.name}. Id:{value.id}. Password:{value.password}</div>
    ));
    return (
        <div>
            {dict}

            <div>
                {collect.info.map((value) => (
                    <h2>Name : {value.name}. Id : {value.id}. Password : {value.password}</h2>
                ))}
            </div>
            <h3>Brand is {collect.Company}</h3>
        </div>
    )
}
