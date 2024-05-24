
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import array from '../db';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
const options = array;
const colPesos = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
})

const ProductSearchInput = () => {
    const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    
    <Stack  direction="row"
    divider={<Divider orientation="horizontal" flexItem />}
    spacing={2}
    alignItems={'center'}
    justifyContent={'space-between'}>
     {/* <div>{value.price}</div>*/} 
     
      {/*<div>{inputValue}</div>*/}
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          
          setValue(newValue);
       console.log(typeof value)
          
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
           
           setInputValue(newInputValue);
         
           
        }}
      on
        id="controllable-states-demo"
        options={options}
        sx={{ width: 500 }}
        renderInput={(params) => <TextField {...params} label="Productos" />}
      />
      <div className='price-holder'>{value !== null && colPesos.format(value.price)}</div>
    </Stack>
  );
}

  


export default ProductSearchInput