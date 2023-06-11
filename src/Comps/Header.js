import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <nav class="bg-gray-200 py-4">
            <div class="container mx-auto flex items-center px-4">
                <Link to="/" class="text-3xl font-bold mr-4">To-Do List</Link>

                <div>
                    <Link to="/" class="mr-4">Home</Link>
                    <Link to="/About" class="mr-4">About</Link>
                </div>
            </div>
        </nav>
    )
}

