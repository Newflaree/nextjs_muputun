// Material UI
import {
  Container,
  Grid,
} from '@mui/material';
// Components
import {
  ProductBanner,
  ProductDescription,
  ProductDocs,
  ProductMainAdvantages,
  ProductNotice,
  ProductTechSpecs
} from '@/components/ui';

/**
 * `ProductView` Component
 * 
 * Componente de vista para mostrar información detallada de un producto específico.
 * Proporciona una descripción completa, incluyendo un banner, ventajas principales,
 * especificaciones técnicas, documentos relacionados y una notificación importante.
 * 
 * Utiliza Container y Grid de Material-UI para estructurar la presentación de los diferentes
 * componentes relacionados con el producto.
 * 
 * `ProductBanner` muestra un banner visualmente atractivo del producto.
 * `ProductNotice` presenta cualquier notificación importante relacionada con el producto.
 * `ProductDescription` ofrece una descripción detallada del producto.
 * `ProductMainAdvantages` resalta las principales ventajas o características del producto.
 * `ProductTechSpecs` detalla las especificaciones técnicas del producto.
 * `ProductDocs` proporciona enlaces para descargar documentos técnicos relacionados.
 * 
 * Este componente es esencial para proporcionar una vista en profundidad del producto,
 * ayudando a los usuarios a comprender completamente sus características y beneficios.
 * 
 * @param {Object} product - Objeto que contiene toda la información del producto.
 * @param {Function} handleDownload - Función para manejar la descarga de documentos.
 * 
 * @returns {React.Component} Un componente de vista para mostrar detalles de un producto.
 */

export const ProductView = ({ product, handleDownload }) => {
  const {
    name,
    desc,
    banner,
    bannerM,
    mainAdv,
    techSpecs,
    includes,
    price,
    doc
  } = product;

  return (
    <Container sx={{ py: '20px' }}>
        {/* Banner */}
        <ProductBanner 
          banner={ banner }
          bannerMobile={ bannerM }
          name={ name }
        />
        {/* Banner */}

        {/* Notice */}
        <ProductNotice />
        {/* Notice */}

        {/* Description */}
        <ProductDescription
          desc={ desc }
          includeItems= { includes }
          price={ price }
        />
        {/* Description */}

        {/* Main Advantages */}
        <ProductMainAdvantages
          mainAdv={ mainAdv }
        />
        {/* Main Advantages */}

        {
          ( techSpecs.length > 0 ) && 
            <>
              <Grid
                container
                spacing={ 4 }
                mb={ 5 }
              >
                <Grid
                  item
                  xs={ 12 }
                  sm={ 6 }
                >
                  {/*Tech Spec*/}
                  <ProductTechSpecs
                    techSpecs={ techSpecs }
                  />
                  {/*Tech Spec*/}
                </Grid>

                <Grid
                  item
                  xs={ 12 }
                  sm={ 6 }
                  my={ 20 }
                  display='flex'
                  textAlign='center'
                  justifyContent='center'
                  alignItems='center'
                >
                  {/*Tech Docs*/}
                  <ProductDocs
                    name={ name }
                    doc={ doc } 
                    handleDownload={ handleDownload }
                  />
                  {/*Tech Docs*/}
                </Grid>
              </Grid>
            </>
          }
    </Container>
  );
}
