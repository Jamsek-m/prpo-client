import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {OpomnikService} from '../opomnik/services/opomnik.service';
import {Opomnik} from '../opomnik/models/opomnik';

@Component({
    moduleId: module.id,
    selector: 'opomnik-podrobnosti',
    templateUrl: 'opomnik-podrobnosti.component.html'
})
export class OpomnikiPodrobnostiComponent implements OnInit {
    opomnik: Opomnik;
    opomniki: Opomnik[];

    constructor(private opomnikService: OpomnikService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.opomnikService.getOpomnik(+params['id']))
            .subscribe(opomnik => this.opomnik = opomnik);
    }

    nazaj(): void {
        this.location.back();
    }
}
