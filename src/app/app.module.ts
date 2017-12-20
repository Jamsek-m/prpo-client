import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {UporabnikiComponent} from './uporabnik/uporabniki.component';
import {UporabnikiDodajComponent} from './uporabnik/uporabniki-dodaj.component';
import {UporabnikPodrobnostiComponent} from './uporabnik/uporabnik-podrobnosti.component';
import {OpomnikiComponent} from './opomnik/opomnik.component';

import {UporabnikService} from './uporabnik/services/uporabnik.service';
import {OpomnikService} from './opomnik/services/opomnik.service';
import {OpomnikiPodrobnostiComponent} from './opomnik/opomnik-podrobnosti.component';
import {OpomnikDodajComponent} from './opomnik/opomnik-dodaj.component';
import { OpomnikUrediComponent } from './opomnik/opomnik-uredi.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        UporabnikiComponent,
        UporabnikPodrobnostiComponent,
        UporabnikiDodajComponent,
        OpomnikiComponent,
        OpomnikiPodrobnostiComponent,
        OpomnikDodajComponent,
        OpomnikUrediComponent
    ],
    providers: [UporabnikService, OpomnikService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

