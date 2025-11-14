import { Routes } from '@angular/router';
import { FormularioPage } from './features/formularioPage/formularioPage';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';
import { ProyectoDosPage } from './features/ProyectoDosPage/ProyectoDosPage';
import { ProyectosPage } from './features/ProyectosPage/ProyectosPage';

export const routes: Routes = [
    {
        path: "",
        component: HomePage
        
    }
    ,
    {
        path: 'perfil',
        component: PerfilPage
    },

    {
        path:'proyectos',
        component: ProyectosPage
    },
    
    {
        path:'proyectos-dos',
        component: ProyectoDosPage
    },
    
    {
        path:'formulario',
        component: FormularioPage
    }

];
