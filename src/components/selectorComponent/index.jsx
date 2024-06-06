import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setCuisineSelect } from '../../slice/recipeSlice';
import { useDispatch, useSelector} from 'react-redux'
import { useState } from 'react';

export default function SelectorComponent() {

  const dispatch = useDispatch();

  const {cuisineSelect} = useSelector(state => state.recipes);
  
  const handleChange = (event) => {
    dispatch(setCuisineSelect(event.target.value));
  };

  return (
    <Box sx={{ width: 200}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cuisine</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cuisineSelect}
          label="Cuisine"
          onChange={handleChange}
          sx={{height: 50, color:"aliceblue"}}
        >
          <MenuItem value={'All'}>All</MenuItem>
          <MenuItem value={'Italian'}>Italian</MenuItem>
          <MenuItem value={'Asian'}>Asian</MenuItem>
          <MenuItem value={'American'}>American</MenuItem>
          <MenuItem value={'Mediterranean'}>Mediterranean</MenuItem>
          <MenuItem value={'Mexican'}>Mexican</MenuItem>
          <MenuItem value={'Brazilian'}>Brazilian</MenuItem>
          <MenuItem value={'Lebanese'}>Lebanese</MenuItem>
          <MenuItem value={'Russian'}>Russian</MenuItem>
          <MenuItem value={'Hawaiian'}>Hawaiian</MenuItem>
          <MenuItem value={'Vietnamese'}>Vietnamese</MenuItem>
          <MenuItem value={'Cocktail'}>Cocktail</MenuItem>
          <MenuItem value={'Spanish'}>Spanish</MenuItem>
          <MenuItem value={'Smoothie'}>Smoothie</MenuItem>
          <MenuItem value={'Turkish'}>Turkish</MenuItem>
          <MenuItem value={'Thai'}>Thai</MenuItem>
          <MenuItem value={'Indian'}>Indian</MenuItem>
          <MenuItem value={'Greek'}>Greek</MenuItem>
          <MenuItem value={'Pakistani'}>Pakistani</MenuItem>
          <MenuItem value={'Korean'}>Korean</MenuItem>
          <MenuItem value={'Moroccan'}>Moroccan</MenuItem>
          <MenuItem value={'Japanese'}>Japanese</MenuItem>        
        </Select>
      </FormControl>
    </Box>
  );
}