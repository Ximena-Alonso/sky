import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../componentes/novedades/NovedadItem';


import '../Styles/Novedades.css';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/api/novedades`);
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);


    return (
        <section className="holder" id='novedades'>   
            <img className='nov1' src='images/novedades.jpg' alt='serv1' />
            <h3>SERVICIOS QUE PUEDE CONTRATAR</h3>
            <div className='row'>

                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.item}
                        service={item.Servicio} time={item.Plazo} imagen={item.imagen} descrip={item.Descripcion} />)
                )}
            </div>
        </section>
    );
}


export default NovedadesPage;