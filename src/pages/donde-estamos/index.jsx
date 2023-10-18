// Material UI
import {
  Box,
  Typography
} from '@mui/material';
// Layouts
import { MainLayout } from '@/components/layouts';


const AddressPage = () => {
  return (
    <MainLayout>
      <Box
        height={'calc( 100vh - 100px )'}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h3'>AddressPage</Typography>
      </Box>
    </MainLayout>
  );
}

export default AddressPage;
