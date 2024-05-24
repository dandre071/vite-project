
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";

import array from "./db"
import { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



 const Auto = () => {
  const [value, setValue] = useState(null)
  let colPesos = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
})
   return (
    <div className="container">  
    <Autocomplete
    value={value}
      disablePortal
      id="combo-box-demo"
      options={array}
      sx={{ width: 600 }}
      
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      onSelect={(e)=>{ setValue(e.target.value)}}
     
      
    
      renderInput={(params) => <TextField {...params} label="Productos" />}
     
  
      
    />
    <h1 color="#123e93">{colPesos.format(value !=null && `${array.filter(x => x.label == value)[0].price}`)}</h1>
    </div>
  );
}
  


export default Auto