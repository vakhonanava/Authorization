// import React,{createContext, useReduce , useEffect} from "react";
// import LoginForm from "./LoginForm";
// import useLocalStorage from './Hooks/useLocalStorage';

// export const LoginForm1 = createContext();

// const  User= (props) => {
//     const[User] = useReducer(name , email, password, [],() =>{
//         const localData = localStorage.getItem('User');
//         return localData ? JSON.parse(localData) : [];
//         });
//         useEffect (() => {
//             localStorage.setItem('User', JSON.stringify(User))
//         }, [books]);
//         return(
//             <BookContext.Provider value={{User , dispatch}}>
//                 {props.children}
//             </BookContext.Provider>
//         )
// }

// export default User;
