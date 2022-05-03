import * as React from "react"
import { BrowserRouter,Outlet } from "react-router-dom";
import {
  ChakraProvider,
} from "@chakra-ui/react"

import theme from "./theme/theme";
import {Router} from "./router/Router";
console.log(Router);
export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </ChakraProvider>
)
