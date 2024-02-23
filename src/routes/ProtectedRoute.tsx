import { FC, ReactNode } from "react";
import { Navigate, Outlet } from 'react-router-dom';


interface props {
    isAllow?: boolean
    children?: ReactNode
    replacePath?: string

}

const ProtectedRoute: FC<props> = ({ isAllow, replacePath = "/", children }) => {
    if (!isAllow) return <Navigate to={replacePath} replace />

    return children ? children : <Outlet/> 
}

export default ProtectedRoute