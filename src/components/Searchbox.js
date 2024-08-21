import React from "react";


const Searchbox = ({searchfield, searchChange})=> {
    return (
       <div className="pa2">
        <input type="search" 
        placeholder="searchrobots"
        onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue"/>
       </div> 
    )
}

export default Searchbox;