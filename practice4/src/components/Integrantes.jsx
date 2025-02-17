import React from "react";

const Integrante = ({ nombre, rol, descripcion }) => {
    return (
        <div className="Integrante">
        <h2>{nombre}</h2>
        <p><strong>Rol:</strong> {rol}</p>
        <p><strong>Descripción:</strong> {descripcion}</p>
        </div>
    );
};

export default Integrante;