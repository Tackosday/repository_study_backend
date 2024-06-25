import { BrowserRouter } from 'react-router-dom';
import './home.css'
import skull from '../assets/skull.gif'

function Home() {
    return (
        <>
            <div className='contain'>
                <div className='order'>
                    <h1 className='wel'>WELCOME TO</h1>



                    <section class="container">
                        <div class="card-container">
                            <div class="card-content">
                                <div class="card-title">
                                    <span class="title">The Dark Udemy</span>
                                </div>
                                <div class="card-body">
                                    <img src={skull} alt="skull" className='skull'/>
                                    <div className="bot">
                                    <a href='/login'><button className="button">Login</button></a>
                                    <a href='/register'><button className="button">Register</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>




                    <div className="loader">
                        <div data-glitch="D4rk#Udem¿" className="glitch">Dark ‎ Udemy</div>
                    </div>
                    <div className='bottoms'>
                        <a href='/login'><button className="button">Login</button></a>
                        <a href='/register'><button className="button">Register</button></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;