import React from 'react';
import Card from '../Components/Card/Card';

function Sobre() {
    return ( 
        <>
            <h1 className='titulo_sobre'>Nossa Equipe</h1>
            <hr />
            <div className='integrantes'>
                <Card/>
            </div>
        </>
     );
}

export default Sobre;