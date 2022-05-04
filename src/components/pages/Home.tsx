import {memo, FC} from "react";
import { Outlet } from "react-router-dom";

export const Home: FC = memo( () => {
    return (<><p>Homeページです。</p><Outlet /></>);
})