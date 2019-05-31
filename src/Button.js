import React from 'react';
import './Button.css'

function Button(props) {
  return (
    <button className="button" onClick={props.onClick}>
      Clique {props.text}
    </button>
    // nesse caso, do props.onClick, a função tbm vai ser parâmetro. 
  )
}
export default Button;
/*componentes tem propriedade, para acessar essas propriedades, eu escrevo como se fosse HTML.
O parametro da função vai ser props
*/
