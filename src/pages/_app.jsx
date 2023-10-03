// Material UI
import { CssBaseline, ThemeProvider } from '@mui/material';
// Themes
import { darkTheme, lightTheme } from '@/themes';
// Styles
import '@/styles/globals.css';
// Context
import { UIProvider } from '@/context';

export default function App({ Component, pageProps }) {
  return (
    <UIProvider>
      <ThemeProvider theme={ lightTheme }>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
