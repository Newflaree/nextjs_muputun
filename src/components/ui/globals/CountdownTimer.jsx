// React
import {
  useEffect,
  useState
} from 'react';
// Material UI
import {
  Box,
  Paper,
  Typography
} from '@mui/material';


const timeUnitBoxStyle = {
  margin: 4,
  padding: 2,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 100,
  borderRadius: '15px',
  backgroundColor: '#f5f5f5', 
};

export const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date( '2023-11-29' ) - +new Date();
    let timeLeft = {};

    if ( difference > 0 ) {
      timeLeft = {
        days: Math.floor( difference / ( 1000 * 60 * 60 * 24 ) ),
        hours: Math.floor( (difference / ( 1000 * 60 * 60 )) % 24 ),
        minutes: Math.floor( (difference / 1000 / 60 ) % 24 ),
        seconds: Math.floor( (difference / 1000) % 60 )
      };
    }

    return timeLeft;
  }

  const [ timeLeft, setTimeLeft ] = useState( calculateTimeLeft() );

  useEffect( () => {
    const timer = setTimeout( () => {
      setTimeLeft( calculateTimeLeft() );
    }, 1000 );

    return () => clearTimeout( timer );
  });

  const timerComponents = [];

  Object.keys( timeLeft ).forEach( ( interval ) => {
    if ( !timeLeft[ interval ] ) {
      return;
    }

    timerComponents.push(
      <span>
        { timeLeft[ interval ] } { interval }{ " " }
      </span>
    );
  });


  return (
    <Box
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Typography
        variant='h1'
        color='primary'
        textAlign='center'
        mb={4}
      >
        ¡Prepárate para nuestro gran lanzamiento!
      </Typography>

      <Box
        display='flex'
        flexDirection='row'
      >
        {
          Object.keys( timeLeft ).map( interval => (
            <Paper
              key={ interval }
              elevation={ 3 }
              style={ timeUnitBoxStyle }
            >
              <Typography
                color='primary'
                variant='h4'
                component='h4'
              >
                { timeLeft[ interval ] }
              </Typography>
              <Typography
                color='secondary'
                variant='subtitle1'
              >
                { interval.toUpperCase() }
              </Typography>
            </Paper>
          ))
        }
      </Box>

      <Typography
        color='secondary'
        variant='h2'
        textAlign='center'
        mt={ 5 }
      >
        Cotiza y reserva previo al lanzamiento con precios especiales
      </Typography>
    </Box>
  );
}
