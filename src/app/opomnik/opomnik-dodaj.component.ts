import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Opomnik} from './models/opomnik';
import {OpomnikService} from './services/opomnik.service';
import { Uporabnik } from '../uporabnik/models/uporabnik';
import { UporabnikService } from '../uporabnik/services/uporabnik.service';

@Component({
    moduleId: module.id,
    selector: 'dodaj-opomnik',
    templateUrl: 'opomnik-dodaj.component.html'
})
export class OpomnikDodajComponent {
    opomnik: Opomnik = new Opomnik;
    uporabniki: Uporabnik[];
    nacin = 'add';

    constructor(private opomnikService: OpomnikService,
                private uporabnikService: UporabnikService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.opomnik.uporabnik = new Uporabnik;
        this.uporabnikService.getUporabniki()
            .then(uporabniki => this.uporabniki = uporabniki)
            .catch(err => console.error(err));
    }


    submitForm(): void {
        this.opomnikService
            .create(this.opomnik)
            .then(() => {
                this.router.navigate(['/opomniki']);
            });
    }

    nazaj(): void {
        this.router.navigate(['/opomniki']);
    }

}
