import React, {useState} from 'react'

const useSelect = (stateInicial, opciones) => {
    // INICIALIZAMOS EL STATE
    const [state, actualizarState ] = useState(stateInicial)

    const SelecNoticias = () => (
      <select
        className="browser-default"
        value={state}
        onChange={ e => actualizarState(e.target.value)}

      >
        {opciones.map(opcion => (
          <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
        ))}
      </select>
    )

    return [state, SelecNoticias];
}

export default useSelect
