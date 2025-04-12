import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import QuemSomos from './pages/quemSomos.tsx';
import FaleComnosco from './pages/FaleComnosco.tsx';
import Servicos from './pages/Servicos.tsx';
import PorOndePassamos from './pages/PorOndePassamos.tsx';
import NossosProjetos from './pages/NossosProjetos.tsx';
import OficinaseCursos from './pages/OficinaseCursos.tsx';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:'/quem-somos',
    element:<QuemSomos/>
  },
  {
    path:'/fale-conosco',
    element:<FaleComnosco/>
  },
  {
    path:'/servicos',
    element: <Servicos/>
  },
  {
    path:'/por-onde-passamos',
    element: <PorOndePassamos/>
  },
  {
    path:'/nossos-projetos',
    element: <NossosProjetos/>
  },
  {
    path:'/oficinas-e-cursos',
    element: <OficinaseCursos/>
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
