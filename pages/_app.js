/** @jsx jsx */
import { jsx } from "theme-ui"
import { ThemeProvider } from "theme-ui"
import theme from "../theme"

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
