import React from 'react';

const NovedadItem = (props) => {
        const { service, time, imagen, descrip } = props;

        return (
                <div className="novedades">
                        <div className='col'>
                                <table class="table">
                                        <thead>
                                                <tr class="table-secondary">
                                                        <th scope="col" class="col-1">Servicio</th>
                                                        <th scope="col" class="col-1">Plazo</th>
                                                        <th scope="col" class="col-7">Descripcion</th>
                                                        <th scope="col" class="col-3">Imagen</th>

                                                </tr>
                                        </thead>
                                        <tbody>
                                                <tr>
                                                        <td className="col-1" id='serv'>{service} </td>
                                                        <td className="col-1">{time} </td>
                                                        <td className="col-7"><div className='descripNov' dangerouslySetInnerHTML={{ __html: descrip }} /></td>
                                                        <td className="col-3"><img className='imgNov' src={imagen} /> </td>
                                                </tr>
                                                </tbody>  

                                </table>
                        </div>
                        
                        <hr />

                </div>
        );
}


export default NovedadItem;