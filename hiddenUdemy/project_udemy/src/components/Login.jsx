import './login.css';
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert2/src/sweetalert2.js';
import '@sweetalert2/theme-dark/dark.css';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const InputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'user') {
      setUser(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onsubmit = async (event) => {
    event.preventDefault();

    const dataSta = { user, password };
    let userConfirm;
    let passwordConfirm;

    const emptyValue = (val) => {
      new swal({
        title: 'Error',
        text: `the ${val} is empty`,
        icon: 'error',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'Try Again',
      });
    };

    const emptyInput = () => {
      if (user !== '') {
        if (password === '') {
          emptyValue('password');
          passwordConfirm = false;
        } else {
          passwordConfirm = true;
        }
        userConfirm = true;
      } else {
        emptyValue('user');
        userConfirm = false;
      }
    };

    const fetchFunction = async () => {
      if (userConfirm && passwordConfirm === true) {
        const data = { user, password };

        const config = JSON.parse(import.meta.env.VITE_Servidor_back);
        const url = `http://${config.hostname}:${config.port}/ingreso/`;

        try {
          const response = await axios.post(url, data, {
            headers: {
              'content-Type': 'application/json',
            },
          });
          const dataRes = response.data;
          const message = dataRes.message;
          new swal({
            icon: 'success',
            title: `${message}`,
            showConfirmButton: false,
            timer: 1500,
            position: 'top',
          });

          let token = dataRes.tocken
          
          const config = JSON.parse(import.meta.env.VITE_Servidor_back);
          const urlUpdate = `http://${config.hostname}:${config.port}/upload/`;
          try {
            const updateToken = await axios.put(urlUpdate,{},{
              headers: {
                'content-Type': 'application/json',
                'tocken':token
              },
            })
            localStorage.clear()
            localStorage.setItem("session", token)
            navigate('/home');
          } catch(error) {
            console.error(error)
          }




        } catch (error) {
          const dataErr = error.request.responseText;
          if (dataErr === 'la contraseña no coincide') {
            new swal({
              title: 'Error',
              text: 'The password is wrong',
              icon: 'error',
            });
          } else {
            new swal({
              title: 'Error',
              text: 'Check if your user is the correct one or register yourself',
              icon: 'error',
            });
          }
        }
      } else {
        new swal({
          title: 'Error',
          text: 'Review the values entered',
          icon: 'error',
        });
      }
    };

    emptyInput();
    fetchFunction();
  };

  return (
    <>
      <div className="orderBox">
        <div className="borderdiv">
          <div className="logdiv">
            <form onSubmit={onsubmit}>
              <h1>&lt; LOGIN /&gt;</h1>

              <p className="par">User</p>
              <input
                className="input"
                name="user"
                type="text"
                value={user}
                onChange={InputChange}
              ></input>

              <p className="par">Password</p>
              <input
                className="input"
                name="password"
                type="password"
                value={password}
                onChange={InputChange}
              ></input>


              <a href="/register">
                <p className="forgot">Register</p>
              </a>
              <button className="ui-btn" type="submit">
                <span> Start </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Login;
