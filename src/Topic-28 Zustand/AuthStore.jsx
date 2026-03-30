import { create } from "zustand";
import {persist} from "zustand/middleware";

// Zustand Store
const useAuthStore = create(
        persist(
            (set)=> ({
                user: null,
                isAuthenticated: false,
                login:(userData)=>{
                    return set({
                                user: userData,
                                isAuthenticated: true
                                })
                },
                logout:()=>{
                    return set({
                                user: null,
                                isAuthenticated: false
                                })
                }
        }),
        {
            name:"auth-data"
        })
)

export default useAuthStore;


// Tanstack vs RTK Query (Thunk, saga, builder)
// Lazy Loading suspense
// Class Based Component
// Tailwind css
// Testing (JEST | VITEST | PLAYWRITE)
// PROJECT - AXIOS (Instance, Interceptor) = REST API

