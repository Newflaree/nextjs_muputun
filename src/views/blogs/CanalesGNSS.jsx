// Next.js
import NextLink from 'next/link';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import {FiberManualRecord} from '@mui/icons-material';
import {BlogTable} from '@/components/ui/blogs';
import {BlogImage, GNSSTable} from '../components';


export const CanalesGNSSView = () => {
  return (
    <Box
      px={ 4 }
      my={ 14 }
    >
      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1704678787/demos/muputun/blogs/lsvcnmzioqmkuzemcgud.jpg'
        alt='Banner Blog'
        isBanner={ true }
      />

      <Typography
        variant='h1'
        component='h1'
        textAlign='center'
        mt={ 7 }
        pb={ 10 }
      >
        ¿Cuántos canales necesita un Receptor GNSS? Los 184 canales del Receptor X5 son más que suficientes
      </Typography>

      <Typography
        variant='p'
        component='p'
        pb={ 4 }
      >
        ¿Cómo influye el número de canales en un receptor GNSS? ¿Obtengo la misma precisión al medir la posición con un receptor GNSS multibanda de 80 ó 600 canales? ¿Tener más canales es necesario para obtener mejor precisión?
      </Typography>

      <Typography
        variant='h2'
        component='h2'
      >
        Las Constelaciones GNSS
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Un Sistema Global de Navegación por Satélite o GNSS (Global Navigation Satellite System) es una red o constelación de satélites que transmiten rangos de señales que son utilizadas para el posicionamiento y localización en cualquier lugar del globo terrestre. Actualmente se cuenta con las siguientes constelaciones: el Sistema de Posicionamiento Global (GPS) de los Estados Unidos, el Sistema Orbital Mundial de Navegación por Satélite (GLONASS) de Rusia, el Sistema de Navegación por Satélite Galileo (Europa), el Beidou (China), el QZSS (Japón) y el IRNSS (India). Las constelaciones QZSS y la IRNSS, solo son efectivas sobre una parte del globo, por lo que en América Latina y en otras zonas del globo no son efectivas.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Cuando un receptor GNSS, una Estación permanente o un CORS se encuentra funcionando y recibiendo datos, siempre tendrá algunos satélites orbitando en el firmamento o bóveda celeste. Es decir, satélites GPS, GLONASS, GALILEO o BEIDOU, que se encuentren orbitando sobre esa zona, enviarán datos que serán recibidos por la antena GNSS del receptor.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Para gestionar toda la información enviada por los satélites GNSS y recibida a través de las antenas, el receptor GNSS utiliza varios canales de datos. Cada canal recibe una señal de un satélite específico de una constelación específica. Pero además cada satélite no solo envía una señal, sino varias señales, señales en diferentes frecuencias.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
        mb={ 7 }
      >
        Entonces, los satélites GNSS transmiten continuamente señales de navegación en dos o más frecuencias en una banda conocida como la Banda “L”. Estas señales contienen códigos de alcance y datos de navegación para permitir a los receptores calcular el tiempo de viaje desde el satélite al receptor y las coordenadas del satélite en cualquier momento. Los principales componentes de esta señal se describen a continuación:
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        mb={4}
      >
        Componentes de las Señales de Navegación
      </Typography>

      <BlogTable />

      <Typography
        variant='p'
        component='p'
        marginTop={ 7 }
        mb={ 4 }
      >
        En el siguiente cuadro, podemos ver un ejemplo de la estructura de las señales de la constelación GPS en la banda L1:
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1704682977/demos/muputun/blogs/canales-gnss/gvfm9xbj7vqsp0ejd8ux.jpg'
        alt='Banda L1'
      />

      <Typography
        variant='p'
        component='p'
        marginTop={ 7 }
        mb={ 4 }
      >
        En la siguiente Tabla podemos ver las diferentes frecuencias enviadas por las constelaciones principales en diferentes bandas.
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1704682977/demos/muputun/blogs/canales-gnss/zqykc18qdskdrii8fjks.jpg'
        alt='Diferentes bandas'
      />

      <Typography
        variant='h2'
        component='h2'
        mt={ 7 }
      >
        Constelaciones en diferentes bandas
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Los bloques en amarillo representan las bandas de frecuencia usadas por los satélites de la constelación GPS. Podemos apreciar que GPS tiene la banda L1 con una frecuencia de 1563 MHz a 1587 MHz aproximadamente, la L2 y la L5. GLONASS tiene las bandas G1, G2 y G3. GALILEO tiene 4 bandas: E1, E5a, E5b y E6. En el caso de BEIDOU, usa las bandas B1, B2 y B3.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Cada satélite GPS envía señales en las bandas L1, L2, L5; cada satélite GLONASS envía señales en las bandas G1, G2, G3, y así sucede también en el caso de los satélites de otras constelaciones con sus respectivas bandas.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        marginTop={ 8 }
      >
        Ventajas de tener varias Frecuencias
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Sabemos que los satélites GNSS orbitan la tierra a un poco más de 20,000 kilómetros de distancia. Las señales emitidas por los satélites deberán recorrer esas grandes distancias y atravesar la atmosfera terrestre antes de llegar al receptor GNSS. Al atravesar la atmosfera terrestre, las señales serán afectadas según las diferentes capas de la atmosfera (troposfera, estratosfera, mesosfera, termosfera y exosfera) y las diferentes temperaturas en cada una de ellas (conocido como Gradiente Térmico Atmosférico). Por ello, el uso en simultaneo de varias frecuencias es fundamental para reducir los errores atmosféricos en las mediciones geodésicas. Explicaremos cómo el uso de múltiples frecuencias ayuda a reducir el error atmosférico:
      </Typography>

      {/*List*/}
      <List>
        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Error ionosférico: La termosfera o ionosfera es una capa de la atmósfera terrestre que contiene electrones libres que pueden refractar las señales GNSS a medida que atraviesan esta capa. El grado de refracción depende de la frecuencia de las señales. Los receptores GNSS multifrecuencia pueden medir la velocidad de propagación de las señales a través de la ionosfera en diferentes frecuencias y calcular el retraso ionosférico. Al disponer de múltiples frecuencias, es posible estimar con mayor precisión el retraso ionosférico y corregir las mediciones para reducir este error.
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Error troposférico: La troposfera es la capa más baja de la atmósfera terrestre y está sujeta a cambios constantes en la presión, temperatura y humedad. Estos cambios afectan la velocidad de propagación de las señales GNSS a través de la troposfera. Al utilizar múltiples frecuencias, los receptores GNSS pueden medir la diferencia en la velocidad de propagación entre las señales de diferentes frecuencias y estimar el retraso troposférico con mayor precisión. Esto permite una corrección más precisa de las mediciones.
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Reducción del Efecto Multipath: El Efecto Multipath ocurre cuando las señales GNSS rebotan en objetos cercanos, como edificios o terreno irregular, antes de llegar al receptor. Esto puede introducir errores en las mediciones geodésicas. Los receptores GNSS multifrecuencia pueden utilizar la información de fase de las señales en diferentes frecuencias para mitigar el efecto Multipath y obtener mediciones más precisas.
          </Typography>
        </ListItem>

        <ListItem>
          <FiberManualRecord sx={{ marginRight: 2 }} color='primary' />
          <Typography>
            Mayor disponibilidad de satélites GNSS: Al utilizar múltiples frecuencias, los receptores GNSS pueden rastrear y utilizar señales de más satélites. Esto aumenta la redundancia y la robustez del sistema, ya que, si una señal se ve afectada por la obstrucción o interferencia, el receptor puede utilizar señales de otras frecuencias o satélites para mantener la precisión de las mediciones.
          </Typography>
        </ListItem>
      </List>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Podemos concluir que a mayor cantidad de frecuencias podremos obtener mayor precisión. Entonces, surge la pregunta fundamental:
      </Typography>

      <Typography
        variant='p'
        component='p'
        fontWeight='bold'
        marginTop={ 8 }
      >
        ¿Cuántos Canales necesita tener un Receptor GNSS para aprovechar todas las señales de todos los satélites disponibles sobre el firmamento en un momento dado?
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        La cantidad aproximada de satélites GNSS operativos en toda la órbita terrestre (año 2023) se puede apreciar en el siguiente cuadro:
      </Typography>

      <BlogImage
        source='https://res.cloudinary.com/newflare/image/upload/v1704683742/demos/muputun/blogs/canales-gnss/qwps28y19wqyaxygz2tg.jpg'
        alt='Banda L1'
      />

      <Typography
        variant='h2'
        component='h2'
        marginTop={ 8 }
      >
        4 Constelaciones GNSS
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Son 102 satélites en órbita en total. Hay que tener en cuenta que debido a que la tierra es un elipsoide, nunca podremos tener a disposición todos los satélites en órbita al mismo tiempo sobre un punto geográfico.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
        mb={ 4 }
      >
        En la siguiente tabla realizaremos un análisis de cuantos canales se requieren durante una sesión en campo utilizando un receptor GNSS multifrecuencia (multibanda), teniendo en cuenta la cantidad máxima de satélites GNSS disponibles en el firmamento. Vamos a suponer que tenemos las mejores condiciones atmosféricas para la recepción, un cielo despejado sin obstrucciones y una sobre estimación de la cantidad de satélites orbitando el punto geográfico terrestre donde se encontraría funcionando el receptor GNSS en un momento dado.
      </Typography>

      <GNSSTable />

      <Typography
        variant='p'
        component='p'
        fontWeight='bold'
        marginTop={ 8 }
      >
        Entonces, actualmente, con 160 canales podemos cubrir ampliamente todas las frecuencias de todos los satélites de todas las constelaciones GNSS que actualmente operan en el espacio. Actualmente, no es necesario tener 200, 400 ó 600 canales.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Hay que tener en cuenta que algunos receptores pueden requerir algunos canales adicionales para recibir señales de sistemas aumentados como SBAS y de Banda L, pero incluso con estos requerimientos particulares, podemos concluir que 160 canales son suficientes actualmente y también en un futuro mediato.
      </Typography>

      <Typography
        variant='h2'
        component='h2'
        marginTop={ 8 }
      >
        Precisión Obtenida versus Cantidad de Satélites GNSS
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        En términos de precisión en la recepción de señales GNSS, es fundamental reconocer que la relación entre el número de satélites y la mejora de la precisión no sigue una progresión lineal. Es importante subrayar que la adición de satélites no se traduce en una mejora proporcional de la precisión. Por lo tanto, no podemos afirmar que al disponer de una cantidad determinada de satélites se obtendrá automáticamente una precisión específica, como, por ejemplo, al contar con seis satélites se logrará una precisión de cinco centímetros, o al contar con 80 satélites se alcanzará una precisión de un milímetro. Esta concepción es incorrecta y no refleja la realidad de la operación de sistemas GNSS.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        En realidad, la relación entre el número de satélites y la precisión de las mediciones presenta una tendencia de mejora, pero esta tendencia se desacelera a medida que aumenta el número de satélites. En otras palabras, si se aumenta la cantidad de satélites utilizados, se obtendrá una mejora significativa en la precisión hasta un punto en el que la mejora se vuelve marginal y tiende a estabilizarse. Por ejemplo, si se dispone de un gran número de satélites, como ochenta, la precisión alcanzada no será significativamente superior a la que se obtendría con, por ejemplo, veinte satélites. La relación entre el número de satélites y la precisión de las mediciones no es lineal y, en última instancia, está sujeta a limitaciones prácticas y factores adicionales que influyen en la precisión.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
      >
        Entonces, en resumen, no se necesitan más de 160 a 180 canales para obtener la más alta precisión porque de momento no es necesario debido a la disponibilidad actual de satélites GNSS en el espacio.
      </Typography>

      <Typography
        variant='p'
        component='p'
        fontWeight='bold'
        marginTop={ 4 }
        mb={ 4 }
      >
        Los 184 canales de los Receptores GNSS X5 de Mettatec son más que suficientes para obtener alta precisión en geoposicionamiento satelital, y alcanzan una precisión de hasta 10 mm en modos PPK, RTK y NTRIP.
      </Typography>

      <Typography
        variant='p'
        component='p'
        marginTop={ 4 }
        fontSize={ 18 }
      >
        Contenido Facilitado por <NextLink href='https://mettatec.com/es/' passHref legacyBehavior><Link target='_blank'>Mettatec</Link></NextLink>.
      </Typography>
    </Box>
  );
}
