import React from 'react'

export default function Todo(props) {
    return (
        <main class="flex-grow px-4">
            <div class="flex items-center justify-center">
                <div class="w-1/2">
                    <div class="bg-white rounded-lg shadow-lg flex items-center p-4 -ml-2">
                        <span class="text-lg flex-grow">{props.tasks["sn"]+" "+props.tasks["title"]}</span>
                    </div>
                </div>
                <div class="w-1/12 flex justify-center">
                    <button class="bg-red-500 rounded-lg p-2 text-white hover:scale-105 transform transition-transform duration-200 -ml-2" onClick={() => { props.Delete(props.tasks) }}>
                        Delete
                    </button>
                </div>
            </div>
        </main>

    )
}
