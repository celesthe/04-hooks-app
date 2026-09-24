
import React from 'react'

export const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="flex flex-col gap-2">Page About me</h1>
            <div className="flex flex-col gap-2">
                <a href="/profile" className="hover:text-blue-500 underline text-xl">
                    View Profile
                </a>
                <a href="/login" className="hover:text-blue-500 underline text-xl">
                    Login
                </a>
            </div>


        </div>
    )
}
