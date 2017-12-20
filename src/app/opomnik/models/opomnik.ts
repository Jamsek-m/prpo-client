import { Uporabnik } from '../../uporabnik/models/uporabnik';
import { Lokacija } from '../../lokacija/models/lokacija';

export class Opomnik {
    id: number;
    naslov: string;
    opis: string;
    uporabnik: Uporabnik;
    lokacija: Lokacija
}
