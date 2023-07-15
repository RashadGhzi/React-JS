import React from 'react'

const people = [10, 20, 30, 40];
export default function ListRender() {
    const listItems = people.map(person =>
        <>
            <li>{person}</li>
        </>
    );
    return <ul>{listItems}</ul>;
}
