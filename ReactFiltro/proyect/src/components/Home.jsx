import axios from 'axios'
import { useEffect, useState } from 'react';
import './home.css'
 function Home () {

    const [CategoryHeader,setCategoryHeader] = useState({})
    
    const headerCategorias = async () => {
        const config = import.meta.env;
        const urlCategory = `http://${config.VITE_HOSTNAME}:${config.VITE_PORT_BACKEND}/categorias/`
            const category = await axios.get(urlCategory, {
                headers: {
                    'content-Type': 'application/json',
                }
            })
            console.log(category)
            setCategoryHeader(category.data)
        
        
        const categoryData = JSON.parse(category)
        setCategoryHeader(categoryData)
        
    }

    useEffect(()=>{
        headerCategorias()
    },[])
    

    return (
        <>
            <div className="header">
                    {
                        CategoryHeader.map(cate =>(
                            <h3 className='HCategory'>{cate.nombre}</h3>
                        ))
                    }
                    
            </div>
            <div className="bodyHome">
                <div className="card">
                    <div className="images">
                        <div className="plural">
                            <div className="pluralimg">
                                <img src="#" />
                            </div>
                            <div className="pluralimg">
                                <img src="#" />
                            </div>
                            <div className="pluralimg">
                                <img src="#" />
                            </div>

                        </div>
                        <div className="single">
                            <div className="singleimg">
                            <img  src="#"></img>
                            </div>
                        </div>
                    </div>
                    <div className="contend">
                        <h1>title</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;