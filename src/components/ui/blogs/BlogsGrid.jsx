// Material UI
import { Grid } from '@mui/material';
import {BlogCard} from '.';


export const BlogsGrid = () => {
  return (
    <Grid
      container
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '100%'
      }}
    >
      {/* Grid Item */}
      <Grid
        item
        padding={ 4 }
        xs={ 12 }
        sm={ 6 }
      >
        <BlogCard />
      </Grid>
      {/* Grid Item */}
      {/* Grid Item */}
      <Grid
        item
        padding={ 4 }
        xs={ 12 }
        sm={ 6 }
      >
      </Grid>
      {/* Grid Item */}
    </Grid>
  );
}
