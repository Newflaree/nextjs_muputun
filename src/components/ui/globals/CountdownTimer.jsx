// React
import {
  useContext,
  useEffect,
  useState
} from 'react';
// Material UI
import {
  Box,
  Paper,
  Typography
} from '@mui/material';
// Context
import { UIContext } from '@/context';

/**
 * `CountdownTimer` Component
 * 
 * Componente de React que muestra una cuenta regresiva para un evento futuro, como un lanzamiento
 * o una oferta especial. Ideal para generar expectación y mantener a los usuarios informados sobre
 * la proximidad de un evento importante.
 * 
 * Utiliza Box y Typography de Material-UI para presentar los números y las unidades de tiempo
 * de la cuenta regresiva de forma visualmente atractiva. Cada unidad de tiempo (días, horas, minutos, segundos)
 * se muestra en un Paper individual para resaltar cada segmento de tiempo.
 * 
 * El componente calcula el tiempo restante hasta una fecha y hora específicas, actualizando la cuenta regresiva
 * cada segundo. Además, se integra con `UIContext` para gestionar la visibilidad del temporizador, ocultándolo
 * automáticamente una vez que el contador llega a cero.
 * 
 * @returns {React.Component} Un componente de cuenta regresiva para eventos futuros.
 */
const timeUnitBoxStyle = {
  margin: 1,
  padding: 1,
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
  const { hideCountdownTimer } = useContext( UIContext );

  const calculateTimeLeft = () => {
    const endTime = new Date( '2023-12-04T10:00:00' )
    const difference = endTime - new Date();
    let timeLeft = {};

    if ( difference > 0 ) {
      timeLeft = {
        dias: Math.floor( difference / ( 1000 * 60 * 60 * 24 ) ),
        horas: Math.floor( ( difference / ( 1000 * 60 * 60 ) ) % 24 ),
        minutos: Math.floor( ( difference / 1000 / 60 ) % 24 ),
        segundos: Math.floor( ( difference / 1000 ) % 60 )
      };
    }

    return timeLeft;
  }

  const [ timeLeft, setTimeLeft ] = useState( calculateTimeLeft() );

  useEffect( () => {
    if (
      timeLeft.dias === 0 && 
      timeLeft.horas === 0 &&
      timeLeft.minutos === 0 &&
      timeLeft.segundos === 0
    ) {
      hideCountdownTimer();
    }
  }, [ timeLeft, hideCountdownTimer ] );

  useEffect( () => {
    const timer = setTimeout( () => {
      setTimeLeft( calculateTimeLeft() );
    }, 1000 );

    return () => clearTimeout( timer );
  }, [ timeLeft ]);

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
      mb={ 3 }
      pt={ 5 }
      height='500px'
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
        Anticípate, cotiza y reserva con precios especiales
      </Typography>
    </Box>
  );
}
