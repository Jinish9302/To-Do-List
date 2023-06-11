import React from 'react'
import Todo from './Todo.js'

export default function Work(props) {
    return (
        <>
            {
                props.tasks.map((task) => {
                    return (
                        <Todo tasks = {task}  Delete = {props.Delete}/>
                    )
                })
            }
        </>
    )
}
