import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Opomnik} from './models/opomnik';
import {OpomnikService} from './services/opomnik.service';

@Component({
    moduleId: module.id,
    selector: 'vsi-opomniki',
    templateUrl: 'opomnik.component.html'
})
export class OpomnikiComponent implements OnInit {
    opomniki: Opomnik[];
    opomnik: Opomnik;

    constructor(private opomnikService: OpomnikService,
                private router: Router) {
    }

    getOpomniki(): void {
        this.opomnikService
            .getOpomniki()
            .then(opomniki => this.opomniki = opomniki);
    }

    ngOnInit(): void {
        this.getOpomniki();
    }

    naPodrobnosti(opomnik: Opomnik): void {
        this.opomnik = opomnik;
        this.router.navigate(['/opomniki', this.opomnik.id]);
    }

    delete(opomnik: Opomnik): void {
        this.opomnikService
            .delete(opomnik.id)
            .then(() => {
                this.opomniki = this.opomniki.filter(u => u !== opomnik);
                if (this.opomnik === opomnik) {
                    this.opomnik = null;
                }
            });
    }

    edit(opomnik: Opomnik): void {
        this.router.navigate(['/urediopomnik', opomnik.id]);
    }

    dodajOpomnik(): void {
        this.router.navigate(['/dodajopomnik']);
    }

}
