import { useImageStore } from '../../store/userStore'
import { useEffect, useState } from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useUser } from '../../hooks/useUser'

export const PerfilImage = () => {
    const { user } = useUser()
    const { image, setImage } = useImageStore()
    const [editing, setEditing] = useState<boolean>(false)

    useEffect(() => {
        const storedValue = localStorage.getItem('token');
        if (storedValue && storedValue.trim() === user?.message.name) {
            if (user?.message.name) {
                setImage(user.message.name)
            }
        }
    }, [user, setImage])

    const handleEmojiSelect = (emoji: { native: string }) => {
        setImage(emoji.native)
        setEditing(false)
    }

    return (
        <div className="bg-primary px-8 pb-20 flex items-center justify-center">
            <header className="relative group">
                <div className="rounded-full w-52 h-52 bg-gray-500 flex items-center justify-center text-6xl relative">
                    {editing ? (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <Picker
                                data={data}
                                onEmojiSelect={handleEmojiSelect}
                                emoji="point_up"
                            />
                        </div>
                    ) : (
                        <span onClick={() => setEditing(true)}>{image}</span>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-0">
                        <button
                            onClick={() => setEditing(true)}
                            className="bg-gray-400 text-white p-2 rounded-full text-xl w-full h-full">
                            Change Image
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}