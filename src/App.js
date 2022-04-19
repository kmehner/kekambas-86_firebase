import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import fire from './config/Fire'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        user: null
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user){
                this.setState({user})
            } else {
                this.setState({user:null})
            }
        })
    }

    register = (e) => {
        e.preventDefault();
        console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPass = e.target.confirmPass.value;
        if (password !== confirmPass){
        alert('Your passwords are not the same')
        return
        }
        console.log(email, password, confirmPass)
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                console.log(userCredential)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    logout = () =>{
        console.log('You have logged out!')
        const auth = getAuth();
        signOut(auth).then(() => {}).catch(err => console.error(err))
    }

    login = (e) =>{
        e.preventDefault();
        console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch(err => console.error(err))
    }

    render() {
        console.log(fire);
        return (
        <div>
            <Navbar logout={this.logout} user={this.state.user}/>
            <div className='container'>
            <Routes>
                <Route path='/' element={<Home user={this.state.user}/>} />
                <Route path='/register' element={<Register register={this.register} user={this.state.user}/>} />
                <Route path='/login' element={<Login login={this.login} user={this.state.user}/>} />
            </Routes>
            </div>
        </div>
        )
    }
}
