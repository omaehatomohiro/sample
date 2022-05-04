import * as React from "react"
import { BrowserRouter } from "react-router-dom";
import {
  ChakraProvider,
} from "@chakra-ui/react"

import theme from "./theme/theme";
import {Router} from "./router/Router";
import { LoginUserProvider } from "./providers/LoginUserProvider";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <LoginUserProvider>
        <Router/>
      </LoginUserProvider>
    </BrowserRouter>
  </ChakraProvider>
)
