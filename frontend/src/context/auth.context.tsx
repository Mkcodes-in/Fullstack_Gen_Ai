import { profile } from '@/api/auth.api';
import type { authUser } from '@/types/auth.type';
import React, { createContext, useEffect, useState, type PropsWithChildren, type SetStateAction } from 'react'

type authContextType = {
    auth: authUser | null,
    setAuth: React.Dispatch<SetStateAction<authUser | null>>,
    loading: boolean,
    setLoading: React.Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<authContextType | null>(null);

export default function AuthProvider({ children }: PropsWithChildren) {
    const [auth, setAuth] = useState<authUser | null>(null);
    const [loading, setLoading] = useState(true);

    async function fetchProfile() {
        try {
            const res = await profile();
            setAuth(res.user);
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false); 
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
