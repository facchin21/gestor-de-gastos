import create from 'zustand'

interface User {
    id: string;
    email:string;
    name:string;
    lastname :string;
    password :string;
}

interface UserState {
    user : User | null;
    setUser: (user: User) => void;
}

interface ImageState {
    image: string;
    setImage: (image: string) => void;
}


export const useUserStore = create<UserState> (set => ({
    user : null,
    setUser: user => set({user}),
    
}))

export const useImageStore = create<ImageState>(set => ({
    image: localStorage.getItem('profileImage') || '',
    setImage: (image: string) => {
        localStorage.setItem('profileImage', image);
        set({ image });
    },
}));