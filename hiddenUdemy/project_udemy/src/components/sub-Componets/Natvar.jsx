import './natvar.css'
import hamburger from '../../assets/menu.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function Natvar() {

    const [styleMenu, Menu] = useState()
    const [styleHam, Ham] = useState()
    const [styleHam2, Ham2] = useState()
    const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
    const [btnUsers,setbtnUsers] = useState({display:"none"})
    const [userName,setusername] = useState()
    const navigate = useNavigate();


    const verifyAdmin = async() => {
        const config = JSON.parse(import.meta.env.VITE_Servidor_back);
        const urlAdmin = `http://${config.hostname}:${config.port}/admin/`;
        const tockenSeccion = localStorage.getItem("session")

        const AdminPeticion =await axios.post(urlAdmin,{},{
            headers: {
                'content-Type': 'application/json',
                'tocken':tockenSeccion
            }
        })
        setusername(AdminPeticion.data.user)
        
        try{
            if(AdminPeticion.data.authorized === "authorized"){
                setbtnUsers({display:"block"})
            }else{
                setbtnUsers({display:"none"})
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        verifyAdmin()
    },[])




    useEffect(() => {
        const actualizarTamañoPantalla = () => {
            setAnchoPantalla(window.innerWidth);
        };
        window.addEventListener("resize", actualizarTamañoPantalla);

        return () => { window.removeEventListener("resize", actualizarTamañoPantalla); };
    }, []);

    useEffect(() => {
        if (anchoPantalla > 700) {
            Menu({
                display: "block",
            })
            Ham({
                display: "none"
            })
            Ham2({
                display: "none"
            })
        } else {
            Menu({
                display: "none"
            })
            Ham({
                display: "block",
                "margin-top": "0px"
            })
            Ham2({
                display: "none"
            })
        }
    }, [anchoPantalla])

    const desplegable = () => {
        Menu({
            display: "block",
            position: "absolute",
        })
        Ham({
            display: "none",
        })
        Ham2({
            display: "block"
        })
    }

    const desplegable2 = () => {
        Menu({
            display: "none",
        })
        Ham({
            display: "block",
            "margin-top": "0px"
        })
        Ham2({
            display: "none"
        })

    }

    const naviFuncHome = () => {
        navigate('/home')
    }
    const naviFuncUser = () => {
        navigate('/usersData')
    }

    const naviFunclogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <>
            <div className="hamburger" style={styleHam}>
                <img src={hamburger} className='hamb' onClick={desplegable} />
            </div>
            <div className="block" style={styleMenu}>
                <div className="cont">
                    <img src={hamburger} className='hamb2' style={styleHam2} onClick={desplegable2} />
                    <div className="margin">
                        <div className="user">
                            <h1 className='username'>{userName}</h1>

                        </div>

                        <div className="redireccion">
                            <button className='btn' type='submit' onClick={naviFuncHome}> Home</button>
                            <button className='btn' style={btnUsers} type='submit' onClick={naviFuncUser}> Users</button>
                        </div>
                        <div className="footer">
                            <button className="logout" onClick={naviFunclogout}> &lt;  Log Out /&gt;</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Natvar;