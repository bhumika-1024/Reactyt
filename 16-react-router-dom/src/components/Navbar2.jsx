import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {


    let navigate = useNavigate()


    return (
        <div className="flex items-center gap-3 px-5 py-2 bg-cyan-800">
            <button
                onClick={() => {
                    navigate('/')
                }}
                className="bg-orange-800 hover:bg-orange-300 text-white px-3 py-1 text-sm rounded-md  transition">
                Return to Home Page
            </button>
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className="bg-orange-800 hover:bg-orange-300 text-white px-3 py-1 text-sm rounded-md  transition">
                Back
            </button>
            <button
                onClick={() => {
                    navigate(+1)s
                }}
                className="bg-orange-800 hover:bg-orange-300 text-white px-3 py-1 text-sm rounded-md  transition">
                Next
            </button>
        </div>
    )
}

export default Navbar2