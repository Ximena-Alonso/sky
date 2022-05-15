import React from 'react';
import '../Styles/componentes/Pages/ServiciosPage.css'
const ServiciosPage = (props) => {
    return (
        <seccion className='holder' id='servicios' >
            <div className='ser_img'>
                <img src='images/servicios/serv.jpg' alt='serv' />
            </div>
            <div className='formato'>
                <h3>Nuestro compromiso es aportar valor mediante la innovación permanente y la búsqueda activa de nuevas soluciones tecnológicas. Gracias a esta filosofía hoy ocupamos una posición de liderazgo a nivel internacional.</h3>
                <div className='servicios'>
                    <img src='images/servicios/serv1.jpg' alt='serv1' />
                    <div className='ser_info'>
                        <h4>Instalaciones y Proyectos</h4>
                        <p>Desde simples listas de control hasta nuestro sofisticado configurador de cabina: en Sky Ascensores encontrarás todas herramientas prácticas que te ayudarán a descubrir y comparar productos.</p>
                    </div>
                </div>
                <div className='servicios'>
                    <img src='images/servicios/serv2.jpg' alt='serv2' />
                    <div className='ser_info'>
                        <h4>Modernizaciones</h4>
                        <p>Con el tiempo, los ascensores y escaleras mecánicas requieren la actualización de componentes importantes para garantizar la funcionalidad, la seguridad y una vida útil prolongada.</p>
                    </div>
                </div>
                <div className='servicios'>
                    <img src='images/servicios/serv3.jpg' alt='serv3' />
                    <div className='ser_info'>
                        <h4>Mantenimiento</h4>
                        <p>El programa de mantenimiento está basado en un software de control operativo, especialmente desarrollado por la empresa, para garantizar el funcionamiento seguro e ininterrumpido de los ascensores.</p>
                    </div>
                </div>
            </div>
        </seccion>
    );
}


export default ServiciosPage;