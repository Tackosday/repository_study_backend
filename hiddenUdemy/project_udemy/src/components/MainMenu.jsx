import Natvar from "./sub-Componets/Natvar";
import './mainMenu.css'
import image from "../assets/background.jpg"
import { useState, useEffect } from "react";
import axios from "axios";
import back from '../assets/regreso-al-futuro.png'
import { useNavigate } from "react-router-dom";



const apiFetch = async () => {

    const url = `http://192.168.128.23:5010/cursos/all`
    try {
        const data = await axios.get(url, {
            headers: {
                'content-Type': 'application/json',
            }
        })
        return data
    } catch (error) {
        console.error(error)
    }

}

const dataCursos = await apiFetch()





function MainMenu() {

    const config = JSON.parse(import.meta.env.VITE_Servidor_back);
    const urlVerify = `http://${config.hostname}:${config.port}/encrypt/`;
    const tockenSeccion = localStorage.getItem("session")
    

    const verifyFunc =async()=>{
        const verify = await axios.post(urlVerify,{},{
            headers: {
                'content-Type': 'application/json',
                'tocken':tockenSeccion
            }
        })
        if(verify.data.status=== "Ok"){
            return null
       }else{
        navigate("/login")
       }
    }
  
    verifyFunc()










    const navigate = useNavigate();
    const [switcher, setswitcher] = useState()
    const [modHidden, setmodHidden] = useState()
    const [collection, setcollection] = useState(null)

    const [urlVideo, seturlVideo] = useState(null)
    const [switchVideo, setswitchVideo] = useState()

    const [textoVideo, settextoVideo] = useState(null)
    const [switchtextoVideo, setswitchtextoVideo] = useState()


    const renderisacion = () => {

        const urlNavigate = (event) => {
            let video_name = event.target.id
            let numero_seccion = collection.findIndex(
                (collec) => collec.videos.some((video) => video.video === video_name)
            );
            let name_curso = localStorage.getItem("Curse")

            if (numero_seccion == -1) {

                let textVideo = event.target.dataset.texto
                settextoVideo(textVideo)
                setswitchtextoVideo({
                    display: "block"
                })



            } else {
                let seccionNumbre = parseInt(numero_seccion) + 1
                let url = `http://192.168.128.23:5010/cursos/play?course=${name_curso}&seccion=${seccionNumbre}&video=${video_name}`
                seturlVideo(url)
                setswitchVideo({
                    display: "block"
                })
            }
        }

        try {
            return (
                collection.map(collec => (


                    <details key={collec.sectionName} className="generalList2"  >
                        <summary className="nodos">{collec.sectionName}</summary>
                        {
                            collec.videos.map(video => (
                                <ol className="maginol" key={video.Titulo}><a href="#" id={video.video} data-texto={video.Texto} className="list" onClick={urlNavigate}>{video.Titulo}</a></ol>
                            ))
                        }

                    </details>


                ))
            )
        } catch (error) {
            console.error(error)
        }
    }





    const returnFunc = () => {
        setswitcher({
            display: "flex"
        })

        setmodHidden({
            display: "none"
        })
    }

    useEffect(() => {
        if (collection == null) {
            returnFunc()
        }
    }, [])


    const returnVideoText = () => {
        setswitchtextoVideo({
            display: "none"
        })
    }

    const returnVideo = () => {
        setswitchVideo({
            display: "none"
        })
    }


    const serch = async (event) => {
        let dataid = event.target.id
        localStorage.setItem("Curse", dataid)
        let url = `http://192.168.128.23:5010/cursos/v2?course=${dataid}`
        try {
            const modulos = await axios.get(url, {
                headers: {
                    'content-Type': 'application/json',
                }
            })

            const moduleData = modulos.data.videos

            setcollection(moduleData)

            setswitcher({
                display: "none"
            })

            setmodHidden({
                display: "block"
            })

        } catch (error) {
            console.log(error)
        }
    }


    const [cursos, setcursos] = useState(dataCursos.data)


    return (
        <div className="newbody">
            <div className="showVideo" style={switchVideo}>
                <div className="natvar">
                    <div className="btnreturn" onClick={returnVideo} >
                        <img src={back} className="return" />
                        <h2 className="texreturn">Return</h2>
                    </div>
                </div>

                <div className="videoCenter">
                    <div className="borderVideo">
                        <video src={urlVideo} className="Video" controls autoPlay></video>

                    </div>
                </div>
            </div>

            <div className="showText" style={switchtextoVideo}>
                <div className="natvar">
                    <div className="btnreturn" onClick={returnVideoText} >
                        <img src={back} className="return" />
                        <h2 className="texreturn">Return</h2>
                    </div>
                </div>
                <div className="textPart">
                    <h3 >{textoVideo}</h3>
                </div>
            </div>

            <div className="seccionNatvar">
                <Natvar />
            </div>
            <div className="compost">
                <div className="titleCursos">
                    <h1 className="titleCur">CURSOS DISPONIBLES</h1>
                </div>
                <div className="cursos" style={switcher}>
                    {cursos.map(curso => (

                        <div key={curso.folder} className="spaceCard">
                            <div className="card" id={curso.folder} onClick={serch}>
                                <div className="image">
                                    <img src={curso.imagenCourse} className="img" id={curso.folder} />
                                </div>
                                <div className="texto" id={curso.folder}>
                                    <h1 className="titleCard" id={curso.folder}>{curso.folder}</h1>
                                    <h4 className="decription" id={curso.folder}>{curso.nameCourse}</h4>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="modulos" style={modHidden}>
                    <div className="btnreturn" onClick={returnFunc} >
                        <img src={back} className="return" />
                        <h2 className="texreturn">Return</h2>
                    </div>
                    <div className="general">
                        {collection === null ? null : renderisacion()}
                    </div>
                </div>
            </div>
        </div>
    )


}

export default MainMenu;