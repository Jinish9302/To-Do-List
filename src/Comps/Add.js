import React, { useState } from 'react'

export default function Add(props) {
    const [title, setTitle] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (title.length === 0) {
            alert("Title Cannot Be Empty")
        }
        props.AddTask(title);
    }

    return (
        <div class="flex items-center justify-center py-8 px-4">
            <form class="w-2/3" onSubmit={submit}>
                <div class="flex items-center">
                    <input type="text" class="flex-grow border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Add a task" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <button type="submit" class="bg-blue-500 rounded-lg text-white py-2 px-4 ml-2 hover:scale-105 transform transition-transform duration-200">Add</button>
                </div>
            </form>
        </div>
    )
}
