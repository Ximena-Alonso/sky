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
                        

                        <h3>FACTOR DE EXITO SOSTENIBLE DE NUESTRA EMPRESA: "CAPITAL HUMANO" </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing edivt. Ipsa divbero at vitae soluta voluptates, sed ipsum nemo iure quo maiores architecto tenetur eius dignissimos hic sapiente rerum ipsam ea facidivs?.Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Vedivt sunt nemo, impedit nulla ipsa officiis assumenda consequatur neque quaerat ratione. Sint odio aut quae illo voluptates porro quia divbero sed.</p>
                    </div>
                    <div className='staff'>
                        <h3>Staff</h3>
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
        </main>
    );
}


export default NosotrosPage;