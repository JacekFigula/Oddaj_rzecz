import {Link,} from 'react-router-dom';
import {useState} from "react";
import Header from "./Header.jsx";
import {app} from "../firebase.jsx"
import {useNavigate} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
const navigate=useNavigate()
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
const handleChange = ({target: { name, value}}) =>{
    setValues((prev) => ({
        ...prev,
        [name]: value,
    }));
}
const handleAdd = ()=>{
    const auth = getAuth(app);
    const {email,password} = values;
    createUserWithEmailAndPassword(auth, email, password)
        .then(()=>{
            navigate("/");
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
        })
}
    return (<>
        <Header/>
        <h1>REJESTRACJA</h1>
        <input name='email' value={values.email} onChange={handleChange} placeholder="Podaj email"/>
        <input type='password'  name='password' value={values.password} onChange={handleChange} placeholder="Podaj hasło"/>
<button onClick={handleAdd}>Dodaj usera</button>
        <Link to="/">Go to Home</Link>
    </>)

}

export default Register