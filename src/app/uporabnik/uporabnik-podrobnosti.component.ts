import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {Uporabnik} from './models/uporabnik';
import {UporabnikService} from './services/uporabnik.service';
import {OpomnikService} from '../opomnik/services/opomnik.service';
import {Opomnik} from '../opomnik/models/opomnik';

@Component({
    moduleId: module.id,
    selector: 'uporabnik-podrobnosti',
    templateUrl: 'uporabnik-podrobnosti.component.html'
})
export class UporabnikPodrobnostiComponent implements OnInit {
    uporabnik: Uporabnik;
    opomniki: Opomnik[];

    constructor(private uporabnikService: UporabnikService,
                private opomnikService: OpomnikService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.uporabnikService.getUporabnik(+params['id']))
            .subscribe(uporabnik => {
                this.uporabnik = uporabnik
                this.opomnikService.getOpomnikiPoUporabniku(uporabnik.id)
                    .then(opomniki => this.opomniki = opomniki)
                    .catch(err => Promise.reject(err.message || err));
            });
    }

    pridobiOpomnike(id: number): void {
        this.opomnikService.getOpomnikiPoUporabniku(id)
            .then(opomniki => this.opomniki = opomniki);
    }

    nazaj(): void {
        this.location.back();
    }
}
