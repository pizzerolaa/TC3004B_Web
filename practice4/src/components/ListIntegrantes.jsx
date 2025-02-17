import React from "react";
import Integrante from "./Integrantes";

const ListIntegrantes = ({ integrantes }) => {
    return (
        <div className="ListIntegrantes">
            <h1>Lista de Integrantes</h1>
            
            {integrantes.map((integrante) => (
                <Integrante
                    key={integrante.id}
                    nombre={integrante.nombre}
                    rol={integrante.rol}
                    descripcion={integrante.descripcion}
                />
            ))}
        </div>
    );
};

export default ListIntegrantes;