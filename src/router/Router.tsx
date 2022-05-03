import React,{memo, VFC} from "react";
import { Routes,Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";
// import { Home } from "../components/pages/Home";
// import { UserManagement } from "../components/pages/UserManagement";
// import { Setting } from "../components/pages/Setting";



export const Router: VFC = memo( () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="home">
                {homeRoutes.map( (route,index) => {
                    return (
                    <React.Fragment key={index}>
                        <Route
                            path={route.path}
                            element={route.element}
                        />
                    </React.Fragment>
                    )
                })}
            </Route>
            <Route path="*" element={<Page404 />}/>
        </Routes>
    );
})

