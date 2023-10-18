import {
  Box,
  CircularProgress
} from "@mui/material";


export const LoadingPage = () => {
  return (
    <Box
      height={ 'calc(100vh - 100px)' }
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <CircularProgress />
    </Box>
  );
}
