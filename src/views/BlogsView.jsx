import {BlogsGrid} from "@/components/ui/blogs";
import { Box, Typography } from "@mui/material";

export const BlogsView = () => {
  return (
    <Box my={ 15 }>
      <Typography 
        variant='h1'
        component='h1'
        textAlign='center'
        mb={ 5 }
      >
        Nuestros Blogs
      </Typography>

      <BlogsGrid />
    </Box>
  );
}
