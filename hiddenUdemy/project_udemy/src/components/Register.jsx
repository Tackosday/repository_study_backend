//seccion de importaciones
import './register.css';
import React, { useState } from 'react';
import swal from 'sweetalert2/src/sweetalert2.js'
import '@sweetalert2/theme-dark/dark.css';
import axios from 'axios';



class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            user: "",
            phone: "",
            email: "",
            password: "",
            verifyPassword: ""
        }
        this.InputChange = this.InputChange.bind(this);
    }
    InputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        });
    }

    render() {
        const onsubmit = (event) => {
            event.preventDefault()
            const emptyValue = (val) => {
                new swal({
                    title: "Error",
                    text: `the ${val} is empty`,
                    icon: "error",
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: "Try Again"
                })
            } 


            const dataSta = this.state;
            let nameConfirm
            let genderConfirm
            let userConfirm
            let phoneConfirm
            let emailConfirm
            let passwordConfirm
            let verifyPasswordConfirm
            let name = dataSta.name
            let gender = dataSta.gender
            let user = dataSta.user
            let phone = dataSta.phone
            let email = dataSta.email
            let password = dataSta.password
            let verifyPassword = dataSta.verifyPassword

            const fetchRegister = async () => {
                const data = {
                    "name": name,
                    "user": user,
                    "password": verifyPassword,
                    "phone": parseInt(phone),
                    "token": null,
                    "email": email,
                    "role": 2,
                    "gender": gender
                };

                const config = JSON.parse(import.meta.env.VITE_Servidor_back)
                const url = `http://${config.hostname}:${config.port}/registro/`

                try {
                    const response = await axios.post(url, data, {
                        headers: {
                            'content-Type': 'application/json',

                        }
                    });

                    let dataRes = response.data

                    if (dataRes == "se ah creado un usuario de manera exitosa") {
                        new swal({
                            icon: 'success',
                            title: 'you have registered',
                            showConfirmButton: false,
                            timer: 1500,
                            position: 'top',
                        })
                        console.clear()
                    } else if (dataRes == "el email ya esta registrado") {
                        new swal({
                            title: "Error",
                            text: `the email address is already registered`,
                            icon: "error",
                        })
                        console.clear()
                    } else if (dataRes == "el usuario ya esta registrado") {
                        new swal({
                            title: "Error",
                            text: `the user is already registered`,
                            icon: "error",
                        })
                        console.clear()
                    } else {
                        new swal({
                            title: "Error",
                            text: `reviews the values entered`,
                            icon: "error",
                        })
                        console.clear()
                    }

                    console.clear()
                } catch (error) {
                    let dataErr = JSON.parse(error.response.request.responseText).message

                    if (dataErr == "el parametro password debe ser una cadena de texto sin caracteres especiales y sin tildes") {
                        new swal({
                            title: "Error",
                            text: `In the password only the following characters are accepted ‎ ‎ ‎ ‎ ‎ ‎   . , / `,
                            icon: "error",
                        })
                        console.clear()
                    } else {
                        new swal({
                            title: "Error",
                            text: `reviews the values entered`,
                            icon: "error",
                        })
                        console.clear()
                    }


                }

            }

            const validationEmpty = () => {
                if (name.length == 0) {
                    emptyValue("name")
                    nameConfirm = false;
                } else {
                    nameConfirm = true;
                }

                if (gender.length == 0) {
                    emptyValue("gender")
                    genderConfirm = false;
                } else {
                    if (gender === "Masculino" || "Femenino" || "Pokemon" || "Otro") {
                        genderConfirm = true;
                    }else{
                        new swal({
                            title: "Error",
                            text: `Are you having fun?`,
                            icon: "error",
                        })
                    }
                    
                }

                if (user.length == 0) {
                    emptyValue("user")
                    userConfirm = false;
                } else {
                    userConfirm = true;
                }

                if (phone.length == 0) {
                    emptyValue("phone")
                    phoneConfirm = false;
                } else {
                    phoneConfirm = true;
                }

                if (email.length == 0) {
                    emptyValue("email")
                    emailConfirm = false;
                } else {
                    emailConfirm = true;
                }

                if (password.length == 0) {
                    emptyValue("password")
                    passwordConfirm = false;
                } else {
                    passwordConfirm = true;
                }

                if (verifyPassword.length == 0) {
                    emptyValue("verifyPassword")
                    verifyPasswordConfirm = false;
                } else {
                    verifyPasswordConfirm = true;
                }
            }

            const MatchPassword = () => {
                let confirm = verifyPasswordConfirm && passwordConfirm && emailConfirm && phoneConfirm && userConfirm && genderConfirm && nameConfirm

                if (confirm === true) {
                    if (password === verifyPassword) {
                        fetchRegister()
                    } else {
                        new swal({
                            title: "Not Mach",
                            icon: "error",
                            text: "password does not match",
                        })
                    }
                } else {
                    new swal({
                        title: "Error",
                        text: `reviews the values entered`,
                        icon: "error",
                    })
                }
            }

            validationEmpty()
            MatchPassword()

            if (validationEmpty()) {
                MatchPassword()
            }


        }
        return (

            <div className='orderBoxR'>

                <div className="borderdivR">
                    <div className="logdivR">

                        <form onSubmit={onsubmit}>
                            <h1>&lt; Register /&gt;</h1>

                            <p className='par'>name</p>
                            <input
                                className='input'
                                name='name'
                                type="Text"
                                value={this.state.name}
                                onChange={this.InputChange}
                            />

                            <p className='par'>gender</p>
                            <select
                                name="gender"
                                value={this.state.gender}
                                onChange={this.InputChange}
                            >
                                <option value="" >...</option>
                                <option value="Masculino" >Masculino</option>
                                <option value="Femenino" >Femenino</option>
                                <option value="Pokemon" >Pokemon</option>
                                <option value="Otro" >Otro</option>
                            </select>

                            <p className='par'>User</p>
                            <input
                                className='input'
                                name='user'
                                type="Text"
                                value={this.state.user}
                                onChange={this.InputChange}
                            />

                            <p className='par'>phone</p>
                            <input
                                className='input'
                                name='phone'
                                type="number"
                                value={this.state.phone}
                                onChange={this.InputChange}
                            />

                            <p className='par'>email</p>
                            <input
                                className='input'
                                name='email'
                                type="Text"
                                value={this.state.email}
                                onChange={this.InputChange}
                            />

                            <p className='par'>Password</p>
                            <input
                                className='input'
                                name='password'
                                type="password"
                                value={this.state.password}
                                onChange={this.InputChange}
                            />

                            <p className='par'>verify Password</p>
                            <input
                                className='input'
                                name='verifyPassword'
                                type="password"
                                value={this.state.verifyPassword}
                                onChange={this.InputChange}

                            />


                            <a href='/login'><p className='forgot'>Start login</p></a>
                            <button className="ui-btn" type='submit'><span> Start </span></button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}


export default Register;