import { Plex } from '@andes/plex';
import { Observable } from 'rxjs/Rx';
import { Component, ViewEncapsulation } from '@angular/core';
import { Auth } from '@andes/auth';

@Component({
    templateUrl: 'home.html',
    styleUrls: ['home.scss'],
    encapsulation: ViewEncapsulation.None // Use to disable CSS Encapsulation for this component
})
export class HomeComponent {
    public usuario: number;
    public password: string;
    public organizacion: any;

    constructor(private plex: Plex, private auth: Auth) {
    };

    login(event) {
        if (event.formValid) {
            this.auth.login(this.usuario.toString(), this.password, this.organizacion.id)
                .subscribe((data) => {
                    this.password = null;
                }, (err) => {
                    this.plex.alert('Usuario o contraseña incorrectos');
                });
        }
    }

    loadOrganizaciones(event) {
        this.auth.organizaciones().subscribe(event.callback);
    }
}
