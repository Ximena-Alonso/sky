import React from 'react';
import '../Styles/componentes/Pages/NosotrosPage.css'
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div id='nosotros'>
                <img src='images/nosotros/nos1.jpg' alt='nos1'></img>
                <div className='formato'>
                    <div className='descripcion'>
                        <h3>OBJETIVOS DE SKY ASCENSORES</h3>
                        <div className='objetivos'>
                            <div className='obj'>
                                <h5> PROGRAMA: COMPLIANCE</h5>
                                <p>Nuestro programa de Compliance está diseñado para identificar riesgos potenciales en una etapa temprana y, si es necesario, iniciar la acción apropiada. Los profesionales de Compliance asesoran, educan e informan a los empleados sobre los requisitos legales. Como resultado, el Compliance es un componente fijo de todos los procesos comerciales.</p>
                            </div>
                            <img src='images/nosotros/obj1.jpg' ></img>
                        </div>
                        <div className='objetivos'>
                            <div className='obj'>
                                <h5> SOSTENIBILIDAD</h5>
                                <p>La sostenibilidad es una parte integral de Sky Ascensores y de nuestra estrategia empresarial. Desarrollamos productos que contribuyen a reducir la huella de carbono de los edificios y las ciudades modernizando las infraestructuras existentes y contribuyendo a un menor consumo de energía.</p>
                            </div>
                            <img src='images/nosotros/obj2.jpg' ></img>
                        </div>
                        <div className='objetivos'>
                            <div className='obj'>
                                <h5> SEGURIDAD</h5>
                                <p>Mantener la seguridad de nuestros pasajeros es fundamental para el éxito de nuestro negocio. Mediante la aplicación de procesos y herramientas vanguardistas, garantizamos una seguridad óptima en la producción, la instalación y el mantenimiento de nuestros ascensores. La seguridad de los productos es un esfuerzo conjunto de Sky ascensores con los propietarios, proveedores de equipos, subcontratistas y proveedores de servicios de mantenimiento.</p>
                            </div>
                            <img src='images/nosotros/obj3.jpg' ></img>
                        </div>
                    </div>
                    <div>
                        <h3>NUESTROS PROFESIONALES </h3>
                        <div className='staff'>
                            <div className='staff-des'>
                                <p>El trabajo en equipo y la seguridad son los componentes esenciales para un lugar de trabajo excepcional, y nos permiten alcanzar alturas extraordinarias. La transparencia, el carácter abierto y la apreciación mutua son los catalizadores de una ambiciosa cultura en la que todos dan lo mejor de sí mismos en el trabajo. Somos apasionados, entusiastas y nos encanta desafiar al status quo.</p>
                            </div>
                            <div className='staff-card'>
                                <div class="pic-ctn">
                                    <div className='pic' id='1'>
                                        <figure> <img src='images/nosotros/nosotros1.jpg' alt='nosotros1'></img>
                                            <h5>JUAN GOMEZ</h5>
                                            <h6>Gerente General</h6>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero</p></figure>
                                    </div>
                                    <div className='pic' id='2'>
                                        <figure> <img src='images/nosotros/nosotros2.jpg' alt='nosotros2'></img>
                                            <h5>DIANA REYER</h5>
                                            <h6>Gerente Comercial</h6>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero</p></figure>
                                    </div>
                                    <div className='pic' id='3'>
                                        <figure> <img src='images/nosotros/nosotros3.jpg' alt='nosotros3'></img>
                                            <h5>ROBERTO ZAPATO</h5>
                                            <h6>Gerente de Sistemas</h6>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero</p></figure>
                                    </div>
                                    <div className='pic' id='4'>
                                        <figure> <img src='images/nosotros/nosotros4.jpg' alt='nosotros4'></img>
                                            <h5>SANDRA GUERRA</h5>
                                            <h6>Gerente de Marketing</h6>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero</p></figure>
                                    </div>
                                    <div className='pic' id='5'>
                                        <figure> <img src='images/nosotros/nosotros5.jpg' alt='nosotros5'></img>
                                            <h5>MARK WOODS</h5>
                                            <h6>Gerente de Imagen</h6>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Doloribus quidem dolores pariatur ipsam nemo corporis non divbero</p></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


export default NosotrosPage;