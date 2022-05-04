import React,{memo, FC} from "react";
import { Routes,Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo( () => {
    return (
        <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="home">
                    {homeRoutes.map( (route,index) => {
                        return (
                        <React.Fragment key={index}>
                            <Route
                                path={route.path}
                                element={<HeaderLayout>{route.element}</HeaderLayout>}
                            />
                        </React.Fragment>
                        )
                    })}
                </Route>
                <Route path="*" element={<Page404 />}/>
        </Routes>
    );
})

