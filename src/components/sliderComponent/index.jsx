import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { setRatingSlide } from '../../slice/recipeSlice';
import {useDispatch, useSelector} from 'react-redux'

export default function SliderComponent() {

  const dispatch = useDispatch();

  const {recipes, ratingSlide} = useSelector(state => state.recipes);

    function valuetext(value) {
        dispatch(setRatingSlide(value));
      }

  return (
    <Box style={{padding: "10px 0px 0px 50px"}}   sx={{ width: 120 }}>
      <Slider
        aria-label="Rating"
        defaultValue={3}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={0.1}
        min={4}
        max={5}
      />
      
    </Box>
  );
}