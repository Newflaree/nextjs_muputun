
// Components
import {
  BlogImage,
  BlogTable,
  BlogList,
  BlogMettaLink,
  GNSSTable,
} from '@/ui/components';
// Database
import { firtListBlogOne } from '@/database';
// Layouts
import { ShopLayout } from '@/ui/layouts';


export const CanalesGNSSView = () => {
  return (
    <ShopLayout
      pageTitle='Canales GNSS'
    >
      <div className="px-4 my-14">
        <BlogImage
          source="https://res.cloudinary.com/newflare/image/upload/v1704678787/demos/muputun/blogs/lsvcnmzioqmkuzemcgud.jpg"
          alt="Banner Blog"
          isBanner={true}
        />

        <h1 className="text-4xl font-bold text-center mt-7 pb-10">
          ¿Cuántos canales necesita un Receptor GNSS? Los 184 canales del Receptor X5 son más que suficientes
        </h1>

        <p className="pb-4">
          ¿Cómo influye el número de canales en un receptor GNSS? ¿Obtengo la misma precisión al medir la posición con un receptor GNSS multibanda de 80 ó 600 canales? ¿Tener más canales es necesario para obtener mejor precisión?
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Las Constelaciones GNSS
        </h2>

        <p className="mt-4">
          Un Sistema Global de Navegación por Satélite o GNSS (Global Navigation Satellite System) es una red o constelación de satélites que transmiten rangos de señales que son utilizadas para el posicionamiento y localización en cualquier lugar del globo terrestre...
        </p>

        <p className="mt-4">
          Cuando un receptor GNSS, una Estación permanente o un CORS se encuentra funcionando y recibiendo datos, siempre tendrá algunos satélites orbitando en el firmamento o bóveda celeste...
        </p>

        <p className="mt-4 mb-7">
          Entonces, los satélites GNSS transmiten continuamente señales de navegación en dos o más frecuencias en una banda conocida como la Banda “L”. Estas señales contienen códigos de alcance y datos de navegación...
        </p>

        <div className='my-10' />

        <h2 className="text-2xl font-semibold mb-4">
          Componentes de las Señales de Navegación
        </h2>

        <BlogTable />
        
        <div className='my-10' />

        <p className="mt-7 mb-4">
          En el siguiente cuadro, podemos ver un ejemplo de la estructura de las señales de la constelación GPS en la banda L1:
        </p>

        <div className='my-10' />

        <BlogImage
          source="https://res.cloudinary.com/newflare/image/upload/v1704682977/demos/muputun/blogs/canales-gnss/gvfm9xbj7vqsp0ejd8ux.jpg"
          alt="Banda L1"
        />

        <div className='my-10' />

        <p className="mt-7 mb-4">
          En la siguiente Tabla podemos ver las diferentes frecuencias enviadas por las constelaciones principales en diferentes bandas.
        </p>

        <BlogImage
          source="https://res.cloudinary.com/newflare/image/upload/v1704682977/demos/muputun/blogs/canales-gnss/zqykc18qdskdrii8fjks.jpg"
          alt="Diferentes bandas"
        />

        <h2 className="text-2xl font-semibold mt-8">
          Constelaciones en diferentes bandas
        </h2>

        <p className="mt-4">
          Los bloques en amarillo representan las bandas de frecuencia usadas por los satélites de la constelación GPS...
        </p>

        <p className="mt-4">
          Cada satélite GPS envía señales en las bandas L1, L2, L5; cada satélite GLONASS envía señales en las bandas G1, G2, G3...
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Ventajas de tener varias Frecuencias
        </h2>

        <p className="mt-4">
          Sabemos que los satélites GNSS orbitan la tierra a un poco más de 20,000 kilómetros de distancia...
        </p>

        <BlogList
          listItems={ firtListBlogOne }
        />

        <p className="mt-4">
          Podemos concluir que a mayor cantidad de frecuencias podremos obtener mayor precisión. Entonces, surge la pregunta fundamental:
        </p>

        <p className="font-bold mt-8">
          ¿Cuántos Canales necesita tener un Receptor GNSS para aprovechar todas las señales de todos los satélites disponibles sobre el firmamento en un momento dado?
        </p>

        <p className="mt-4">
          La cantidad aproximada de satélites GNSS operativos en toda la órbita terrestre (año 2023) se puede apreciar en el siguiente cuadro:
        </p>

        <BlogImage
          source="https://res.cloudinary.com/newflare/image/upload/v1704683742/demos/muputun/blogs/canales-gnss/qwps28y19wqyaxygz2tg.jpg"
          alt="Banda L1"
        />

        <h2 className="text-2xl font-semibold mt-8">
          4 Constelaciones GNSS
        </h2>

        <p className="mt-4">
          Son 102 satélites en órbita en total. Hay que tener en cuenta que debido a que la tierra es un elipsoide, nunca podremos tener a disposición todos los satélites en órbita al mismo tiempo sobre un punto geográfico.
        </p>

        <p className="mt-4 mb-4">
          En la siguiente tabla realizaremos un análisis de cuantos canales se requieren durante una sesión en campo...
        </p>

        <GNSSTable />

        <h2 className="text-2xl font-semibold mt-8">
          Precisión Obtenida versus Cantidad de Satélites GNSS
        </h2>

        <p className="mt-4">
          En términos de precisión en la recepción de señales GNSS, es fundamental reconocer que la relación entre el número de satélites y la mejora de la precisión no sigue una progresión lineal. Es importante subrayar que la adición de satélites no se traduce en una mejora proporcional de la precisión. Por lo tanto, no podemos afirmar que al disponer de una cantidad determinada de satélites se obtendrá automáticamente una precisión específica, como, por ejemplo, al contar con seis satélites se logrará una precisión de cinco centímetros, o al contar con 80 satélites se alcanzará una precisión de un milímetro. Esta concepción es incorrecta y no refleja la realidad de la operación de sistemas GNSS.
        </p>

        <p className="mt-4">
          En realidad, la relación entre el número de satélites y la precisión de las mediciones presenta una tendencia de mejora, pero esta tendencia se desacelera a medida que aumenta el número de satélites. En otras palabras, si se aumenta la cantidad de satélites utilizados, se obtendrá una mejora significativa en la precisión hasta un punto en el que la mejora se vuelve marginal y tiende a estabilizarse. Por ejemplo, si se dispone de un gran número de satélites, como ochenta, la precisión alcanzada no será significativamente superior a la que se obtendría con, por ejemplo, veinte satélites. La relación entre el número de satélites y la precisión de las mediciones no es lineal y, en última instancia, está sujeta a limitaciones prácticas y factores adicionales que influyen en la precisión.
        </p>

        <p className="mt-4">
          Entonces, en resumen, no se necesitan más de 160 a 180 canales para obtener la más alta precisión porque de momento no es necesario debido a la disponibilidad actual de satélites GNSS en el espacio.
        </p>

        <p className="mt-4 font-bold">
          Los 184 canales de los Receptores GNSS X5 de Mettatec son más que suficientes para obtener alta precisión en geoposicionamiento satelital, y alcanzan una precisión de hasta 10 mm en modos PPK, RTK y NTRIP.
        </p>

        <BlogMettaLink />
      </div>
    </ShopLayout>
  );
};
