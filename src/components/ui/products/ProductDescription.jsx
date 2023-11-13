// Material UI
import {
  Box,
  Typography
} from "@mui/material";


export const ProductDescription = ({ desc }) => {
  return (
    <Box my={ 10 }>
      <Typography
        variant='body1'
        textAlign='center'
        paragraph
      >
        { desc }
      </Typography>
    </Box>
  );
}
