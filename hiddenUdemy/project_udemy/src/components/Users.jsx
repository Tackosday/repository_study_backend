import './users.css'
import Natvar from "./sub-Componets/Natvar";
import { useState } from 'react';
import React from 'react';
import axios from 'axios';

const userApi = async () => {
    const config = JSON.parse(import.meta.env.VITE_Servidor_back)
    const url = `http://${config.hostname}:${config.port}/preview/`

    const userD = await axios.get(url, {
        headers: {
            'content-Type': 'application/json',
        }
    })
    return (userD)
}

const dataList = await userApi()


function Users() {

    // const config = JSON.parse(import.meta.env.VITE_Servidor_back);
    // const urlVerify = `http://${config.hostname}:${config.port}/encrypt/`;
    // const tockenSeccion = localStorage.getItem("session")


    // const verifyFunc = async () => {
    //     const verify = await axios.post(urlVerify, {}, {
    //         headers: {
    //             'content-Type': 'application/json',
    //             'tocken': tockenSeccion
    //         }
    //     })
    //     if (verify.data.status === "Ok") {
    //         return null
    //     } else {
    //         navigate("/login")
    //     }
    // }

    // verifyFunc()

    const config = JSON.parse(import.meta.env.VITE_Servidor_back);
    const urlchange = `http://${config.hostname}:${config.port}/changerole/`;
    const changeRoleFunc =async(event)=>{
    const idChange=event.target.dataset.role
        const change = await axios.put(urlchange,{},{
            headers: {
                            'content-Type': 'application/json',
                            'id': idChange
                    }
        })
        setTimeout(function() {
            window.location.reload();
          }, 1000);         
    }

    const [dataUsersList, setdataUsersList] = useState(dataList.data)


    return (
        <div className="userBody">
            <div className="seccionNatvarU">
                <Natvar />
            </div>
            <div className="seccionTotal">
                <div className="whiteboard">
                    <div className="tabla">
                        <div className="filaHeader">
                            <div className="nombre celdaHed"><h3 className="textCel">Name</h3></div>
                            <div className="userName celdaHed"><h3 className="textCel">Username</h3></div>
                            <div className="role celdaHed"><h3 className="textCel">Admin</h3></div>
                        </div>
                        {dataUsersList.map(list => (
                            <div className="fila" key={list._id}>
                                <div className="nombreCel"><h3 className="textCel">{list.name}</h3></div>
                                <div className="userNameCel" ><h3 className="textCel">{list.user}</h3></div>
                                <div className="roleCel">
                                    <label className="lock-checkbox">
                                        <input id="lock" data-role={list.id} type="checkbox" checked={list.role === 1 ? false : true} onClick={changeRoleFunc} />
                                        <span className="lock-icon">
                                            <svg viewBox="0 0 24 24">
                                                <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"></path>
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        ))
                        }


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;