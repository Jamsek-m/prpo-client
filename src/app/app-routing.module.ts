import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UporabnikiComponent} from './uporabnik/uporabniki.component';
import {UporabnikPodrobnostiComponent} from './uporabnik/uporabnik-podrobnosti.component';
import {UporabnikiDodajComponent} from './uporabnik/uporabniki-dodaj.component';
import {OpomnikiComponent} from './opomnik/opomnik.component';
import {OpomnikiPodrobnostiComponent} from './opomnik/opomnik-podrobnosti.component';
import {OpomnikDodajComponent} from './opomnik/opomnik-dodaj.component';
import { OpomnikUrediComponent } from './opomnik/opomnik-uredi.component';

const routes: Routes = [
    {path: '', redirectTo: '/opomniki', pathMatch: 'full'},
    {path: 'uporabniki', component: UporabnikiComponent},
    {path: 'uporabniki/:id', component: UporabnikPodrobnostiComponent},
    {path: 'dodajuporabnika', component: UporabnikiDodajComponent},
    {path: 'opomniki', component: OpomnikiComponent},
    {path: 'opomniki/:id', component: OpomnikiPodrobnostiComponent},
    {path: 'dodajopomnik', component: OpomnikDodajComponent},
    {path: 'urediopomnik/:id', component: OpomnikUrediComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
