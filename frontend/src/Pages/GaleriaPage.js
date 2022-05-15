import React from 'react';
import '../Styles/componentes/Pages/GaleriaPage.css'
const GaleriaPage = (props) => {
    return (
        <seccion id='galeria' >
            <div className='holder'>
                <div className='formato'>
                    <h3>AJUSTE PERFECTO GRACIAS A NUESTRA AMPLIA VARIADAD DE SISTEMAS DE ELEVACION</h3>
                    <p>SKY ASCENSORES es un protagonista dinámico que participa en forma activa en el desarrollo, fabricación e instalación de una amplia gama de medios de elevación que brindan la solución perfecta para necesidades del transporte vertical.</p>
                    <div className='ascensor energy'>
                        <div className='left'>
                            <h4>Ascensor Energy</h4>
                            <p>El elevador Energy es la solución perfecta para edificios residenciales de hasta 14 pisos. Este elevador compacto ha sido diseñado con materiales resistentes que aumentan su eficiencia y extienden su vida útil. </p>
                        </div>
                        <div id="carouselenergy" className="carousel slide rigth" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselenergy" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselenergy" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselenergy" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselenergy" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselenergy" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselenergy" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselenergy" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/Galeria/hidra/imag1.jpg" className="d-block w-100" alt="hidra1"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/hidra/imag2.jpg" className="d-block w-100" alt="hidra2"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/hidra/imag3.jpg" className="d-block w-100" alt="hidra3"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/hidra/imag4.jpg" className="d-block w-100" alt="hidra4"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/hidra/imag5.jpg" className="d-block w-100" alt="hidra5"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/hidra/imag6.jpg" className="d-block w-100" alt="hidra6"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/hidra/imag7.jpg" className="d-block w-100" alt="hidra7"></img>
                                </div>
                            </div>
                            <a href='carouselenergy' className="carousel-control-prev" type="button" data-bs-target="#carouselenergy" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a href='carouselenergy' className="carousel-control-next" type="button" data-bs-target="#carouselenergy" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className='ascensor power'>
                        <div className='left'>
                            <h4>Ascensor Power</h4>
                            <p>La solución ideal para edificios comerciales de mediana altura con volumen de tráfico moderado. Su adaptación con precisión milimétrica al hueco del edificio, lo convierten en la solución perfecta tanto para una nueva instalación como para una modernización</p>
                        </div>
                        <div id="carouselpower" className="carousel slide rigth" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselpower" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselpower" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselpower" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselpower" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselpower" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselpower" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/Galeria/panora/panor1.jpg" className="d-block w-100" alt="pan1"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/panora/panor2.jpg" className="d-block w-100" alt="pan2"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/panora/panor3.jpg" className="d-block w-100" alt="pan3"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/panora/panor4.jpg" className="d-block w-100" alt="pan4"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/panora/panor5.jpg" className="d-block w-100" alt="pan5"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/panora/panor6.jpg" className="d-block w-100" alt="pan6"></img>
                                </div>
                            </div>
                            <a href='carouselpower' className="carousel-control-prev" type="button" data-bs-target="#carouselpower" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a href='carouselpower' className="carousel-control-next" type="button" data-bs-target="#carouselpower" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className='ascensor vehicular'>
                        <div className='left'>
                            <h4>Ascensor Vehicular</h4>
                            <p>Inspirada en la filosofía de agregar valores reales a sus productos, nuestra empresa proyecta y coloca a disposición equipos para facilitar los procesos de transporte vertical, no solo de pasajeros, sino también de automóviles, materiales, materia prima, productos y etc. Por eso, desarrollamos la línea Monta vehiculos.</p>
                        </div>
                        <div id="carouselvehic" className="carousel slide rigth" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselvehic" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselvehic" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselvehic" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselvehic" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/Galeria/vehic/vehic1.jpg" className="d-block w-100" alt="veh21"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/vehic/vehic2.jpg" className="d-block w-100" alt="veh2"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/vehic/vehic3.jpg" className="d-block w-100" alt="veh3"></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/Galeria/vehic/vehic4.jpg" className="d-block w-100" alt="veh4"></img>
                                </div>
                            </div>
                            <a href='carouselvehic' className="carousel-control-prev" type="button" data-bs-target="#carouselvehic" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a href='carouselvehic' className="carousel-control-next" type="button" data-bs-target="#carouselvehic" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </seccion>

    );
}



export default GaleriaPage;