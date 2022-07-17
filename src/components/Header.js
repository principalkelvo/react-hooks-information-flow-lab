import React from "react";

function Header({onChangeMode, mode}){
    
 
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onChangeMode}>
          {mode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}
export default Header;