import { useContext,createContext,useState,useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

//creating a new context
const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:''
    })

    const [cookies]=useCookies(['token'])   //read the token from cookie storage

    useEffect(()=>{
        if (cookies.token){
            axios.defaults.headers.common['Authorization']=`Bearer ${cookies.token}`;
            //setting the auth
            setAuth({
                ...auth,
                user:JSON.parse(localStorage.getItem('user')),
                token:cookies.token,
            })
        }else{
            setAuth({user:null,token:''})
            localStorage.clear()
            delete axios.defaults.headers.common['Authorization']
        }
    
    },[cookies.token])

    return (
        <AuthContext.Provider value={[auth,setAuth]}>
         {children}
        </AuthContext.Provider>
    )
};


// custom hook 
const useAuth=()=>useContext(AuthContext)

export {useAuth,AuthProvider}

