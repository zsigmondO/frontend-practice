import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Character } from '../../types/rick-and-morty';
import { getStatusAndSpecies } from './helper/helper';

export default function MediaCard(props: Character) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 205 }}
        image={props.image}
        title={props.name}
      />
      <CardContent>
        <div className="text-2xl font-semibold">{props.name}</div>
        <div className="mb-2">
          {getStatusAndSpecies(props.status, props.species)}
        </div>
        <div className="mb-2">Gender : {props.gender}</div>
        <Link className="font-light text-sm" to={props.origin.url}>
          {props.origin.name}
        </Link>
      </CardContent>
    </Card>
  );
}
