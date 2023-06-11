import React from 'react'

export default function About() {
    return (
        <div id="about" class="bg-gray-100 p-8 mb-8">
            <h1 class="text-2xl font-bold mb-4">About</h1>
            <p>Welcome to our to-do list application!</p>
            <p class="mb-4">This application allows you to create and manage your daily tasks effectively. You can add and delete tasks as needed, ensuring that you stay organized and on top of your responsibilities.</p>
            <p class="mb-4">Features:</p>
            <ul class="list-disc pl-8 mb-4">
                <li>Add tasks: Simply enter the task description and click the "Add" button.</li>
                <li>Delete tasks: Remove completed or unnecessary tasks from your list with a single click.</li>
            </ul>
            <p>Start managing your tasks efficiently today!</p>
        </div>
    )
}
