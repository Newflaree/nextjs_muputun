// Next
import Image from "next/image";
// Material UI
import { Box } from "@mui/material";

export const BlogSmallImage = ({
  source = '',
  alt = '',
  isShort = false,
  isBanner = false
}) => {
  return (
    <>
      <Box sx={{
        my: 4,
        display: {
          xs: 'none',
          md: 'flex'
        },
        width: '100%'
      }}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{
            width: '100%',
          }}
        >
          <Image
            src={ source }
            alt={ alt }
            width={
              isShort
                ? 250
                : 600
            }
            height={
              isBanner
                ? 400
                : 300
            }
            style={{
              borderRadius: 8,
            }}
          />
        </Box>
      </Box>

      <Box sx={{
        display: {
          xs: 'flex',
          md: 'none'
        }
      }}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{
            width: '100%',
          }}
        >
          <Image
            src={ source }
            alt={ alt }
            width={ isShort ? 220 : 330 }
            height={ isShort ? 450 : 150 }
            style={{ borderRadius: 8 }}
          />
        </Box>
      </Box>
    </>
  );
}
