import { Button } from '@/components/ui/button'
import React from 'react'

export const ProfilePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl">User Profile</h1>
            <h1 />
            <pre>{JSON.stringify({}, null, 2)}</pre>

            <Button variant="destructive">
                Exit
            </Button>
        </div>
    )
}
