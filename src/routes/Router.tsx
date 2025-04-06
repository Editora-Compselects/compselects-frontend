import { Navigate, RouteObject } from "react-router-dom";
import Eventos from "../pages/Eventos";
import EventoItem from "../pages/EventoItem";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Submissoes from "../pages/Submissoes";
/*
import Autores from "../pages/Autores";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import Contato from "../pages/Contato";
*/
import Layout from "./Layout";
import Publicacoes from "../pages/Publicacoes";
import PublicacaoItem from "../pages/PublicacaoItem";

export const PublicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            //{ path: 'autores', element: <Autores /> },
            //{ path: 'blog', element: <Blog /> },
            //{ path: 'blog/:id', element: <BlogPost /> },
            //{ path: 'contato', element: <Contato /> },
            { path: 'publicacoes', element: <Publicacoes /> },
            { path: 'publicacoes/:id', element: <PublicacaoItem /> },
            { path: '/home', element: <Home /> },
            { path: '/eventos', element: <Eventos /> },
            { path: "/eventos/:id", element: <EventoItem /> },
            { path: '/sobre', element: <Sobre /> },
            { path: '/submissoes', element: <Submissoes /> },
            { path: '*', element: <Navigate to="/home" replace /> },
        ]
    }
];
