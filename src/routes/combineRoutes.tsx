import { RouteProps } from "react-router-dom";
import { mainMappings } from "./mappings/mainMappings";

export const combineRoutes:RouteProps[]  = [
    ...mainMappings
]