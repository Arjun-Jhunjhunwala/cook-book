import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../../slice/recipeSlice';
import { sortRecipes } from '../../api/recipes';

export default function SortComponent() {

  const dispatch = useDispatch();  
  const {sort} = useSelector(state => state.recipes)

  const handleChange = (event) => {
    dispatch(sortRecipes(event.target.value.sortBy,event.target.value.order))
    dispatch(setSort(event.target.value.display))
  };

  return (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
          sx={{height: 50, color:"aliceblue"}}
        >
          <MenuItem value={{sortBy:'Default',order:'asc',display:'None'}}>None</MenuItem>
          <MenuItem value={{sortBy:'name',order:'asc',display:'Name'}}>Name</MenuItem>
          <MenuItem value={{sortBy:'rating',order:'desc',display:'Rating'}}>Rating</MenuItem>
          <MenuItem value={{sortBy:'caloriesPerServing', order:'asc',display:'Calories'}}>Calories</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}