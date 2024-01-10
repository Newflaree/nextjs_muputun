import {Box} from "@mui/material";
import Image from "next/image";

export const BlogImage = ({ source = '', alt = '' }) => {
  return (
    <>
      <Box sx={{
        display: {
          xs: 'none',
          md: 'flex'
        }
      }}>
        <Image
          src={ source }
          alt={ alt }
          width={ 1000 }
          height={ 400 }
          style={{ borderRadius: 8 }}
        />
      </Box>

      <Box sx={{
        display: {
          xs: 'flex',
          md: 'none'
        }
      }}>
        <Image
          src={ source }
          alt={ alt }
          width={ 330 }
          height={ 150 }
          style={{ borderRadius: 8 }}
        />
      </Box>
    </>
  );
}
