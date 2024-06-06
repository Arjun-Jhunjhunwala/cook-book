import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import {useDispatch, useSelector} from 'react-redux'
import { addToFav } from '../../slice/recipeSlice';

export default function RecipeCard({recipe}) {

const {id, name, rating,cuisine, image, prepTimeMinutes, cookTimeMinutes, difficulty} = recipe;

const dispatch = useDispatch();

const onFavClick = (id) => {
  dispatch(addToFav(id));
}

const {fav} = useSelector(state => state.recipes);

  return (
    <Card className='card' sx={{ width: 300, height: 500}}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title={name}
      />
      
      <CardContent >
        <div style={{display: "flex", flexDirection: "column", height: 185, justifyContent: "space-between"}}>
        <Typography sx={{textAlign: "left"}} gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <div>
        <Typography sx={{textAlign: "left"}} variant="body2" color="text.secondary">
            Preparation Time: {prepTimeMinutes} mins
        </Typography>
        <Typography sx={{textAlign: "left"}} variant="body2" color="text.secondary">
            Cook Time: {cookTimeMinutes} mins
        </Typography>
        <Typography sx={{textAlign: "left"}} variant="body2" color="text.secondary">
            Cuisine: <Chip label={cuisine} variant="outlined" />
        </Typography>
        </div>
        </div>
      </CardContent>
      <CardActions sx={{display: "flex", justifyContent: "space-between", marginLeft: 2, marginRight: 2}}>
        
      <IconButton onClick={()=>{onFavClick(id)}} aria-label="add to favorites" sx={{color: (fav.find(recipe => recipe.id===id))? "#ff1744":"grey"}}>
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
            <StarRateIcon sx={{color: "gold"}} /> {rating}
        </Typography>
        
      </CardActions>
      
    </Card>
  );
}