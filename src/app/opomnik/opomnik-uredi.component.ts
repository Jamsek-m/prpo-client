import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
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
export class OpomnikUrediComponent {
    opomnik: Opomnik;
    uporabniki: Uporabnik[];
    nacin = 'edit';

    constructor(private opomnikService: OpomnikService,
                private uporabnikService: UporabnikService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.opomnikService.getOpomnik(+params['id']))
            .subscribe(opomnik => {
                this.opomnik = opomnik;
                this.uporabnikService.getUporabniki()
                    .then(uporabniki => this.uporabniki = uporabniki)
                    .catch(err => console.error(err));
            });
    }


    submitForm(): void {
        this.opomnikService
            .update(this.opomnik)
            .then(() => {
                this.router.navigate(['/opomniki']);
            });
    }

    nazaj(): void {
        this.router.navigate(['/opomniki']);
    }

}
