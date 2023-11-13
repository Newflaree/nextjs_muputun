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


export const ProductView = ({ product, handleDownload }) => {
  const {
    name,
    desc,
    banner,
    mainAdv,
    techSpecs,
    imgs,
    price,
    doc
  } = product;

  return (
    <Container sx={{ py: '20px' }}>
        {/* Banner */}
        <ProductBanner 
          banner={ banner }
          name={ name }
        />
        {/* Banner */}

        {/* Notice */}
        <ProductNotice />
        {/* Notice */}

        {/* Description */}
        <ProductDescription
          desc={ desc }
        />
        {/* Description */}

        {/* Main Advantages */}
        <ProductMainAdvantages
          mainAdv={ mainAdv }
        />
        {/* Main Advantages */}

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
    </Container>
  );
}
