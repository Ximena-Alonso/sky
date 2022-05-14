import React from 'react';
import '../Styles/componentes/Pages/GaleriaPage.css'
const GaleriaPage = (props) => {
    return (
        <seccion id='galeria' >
            <div className='holder'>
                <div className='formato'>
                    <h3>AJUSTE PERFECTO GRACIAS A NUESTRA AMPLIA VARIADAD DE SISTEMAS DE ELEVACION</h3>
                    <p>SKY ASCENSORES es un protagonista dinámico que participa en forma activa en el desarrollo, fabricación e instalación de una amplia gama de medios de elevación que brindan la solución perfecta para necesidades del transporte vertical.</p>

                    <div className='hidraulicos'>
                        <h3>HIDRAULICOS</h3>
                        <div id="carouselhidra" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselhidra" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselhidra" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselhidra" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselhidra" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselhidra" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselhidra" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselhidra" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="images/Galeria/hidra/imag1.jpg" class="d-block w-100" alt="..."></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/hidra/imag2.jpg" class="d-block w-100" alt="..."></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/hidra/imag3.jpg" class="d-block w-100" alt="..."></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/hidra/imag4.jpg" class="d-block w-100" alt="..."></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/hidra/imag5.jpg" class="d-block w-100" alt="..."></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/hidra/imag6.jpg" class="d-block w-100" alt="..."></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/hidra/imag7.jpg" class="d-block w-100" alt="..."></img>
                                </div>
                            </div>
                            <a href='carouselhidra' class="carousel-control-prev" type="button" data-bs-target="#carouselhidra" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a href='carouselhidra' class="carousel-control-next" type="button" data-bs-target="#carouselhidra" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className='panoramicos'>
                        <h3>PANORAMICOS</h3>
                        <div id="carouselpanor" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselpanor" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselpanor" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselpanor" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselpanor" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselpanor" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselpanor" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="images/Galeria/panora/panor1.jpg" class="d-block w-100" alt="pan1"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/panora/panor2.jpg" class="d-block w-100" alt="pan2"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/panora/panor3.jpg" class="d-block w-100" alt="pan3"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/panora/panor4.jpg" class="d-block w-100" alt="pan4"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/panora/panor5.jpg" class="d-block w-100" alt="pan5"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/panora/panor6.jpg" class="d-block w-100" alt="veh6"></img>
                                </div>
                            </div>
                            <a href='carouselpanor' class="carousel-control-prev" type="button" data-bs-target="#carouselpanor" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a href='carouselpanor' class="carousel-control-next" type="button" data-bs-target="#carouselpanor" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className='vehiculares'>
                        <h3>VEHICULARES</h3>
                        <div id="carouselvehic" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselvehic" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselvehic" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselvehic" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselvehic" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="images/Galeria/vehic/vehic1.jpg" class="d-block w-100" alt="veh21"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/vehic/vehic2.jpg" class="d-block w-100" alt="veh2"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/vehic/vehic3.jpg" class="d-block w-100" alt="veh3"></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/Galeria/vehic/vehic4.jpg" class="d-block w-100" alt="veh4"></img>
                                </div>

                            </div>
                            <a href='carouselvehic' class="carousel-control-prev" type="button" data-bs-target="#carouselvehic" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a href='carouselvehic' class="carousel-control-next" type="button" data-bs-target="#carouselvehic" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </seccion>

    );
}



export default GaleriaPage;