import { Injectable } from '@angular/core';
import { AppSettings } from './../app.settings';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Rx';
import { Http, URLSearchParams } from '@angular/http';
import { IProfesional } from './../interfaces/IProfesional';
import { Server } from '@andes/shared';

@Injectable()
export class ProfesionalService extends BaseService {
    profesionalesURL = AppSettings.API_ENDPOINT + '/core/tm/profesionales/';

    constructor(_http: Http, private server: Server) {
        super(_http);
    }

    getProfesional(params: any): Observable<any> {
        debugger;
        return this.server.get(this.profesionalesURL, { params: params, showError: true });
    }
    getProfesionalFoto(id: string = null): Observable<any> {
        return this.server.get(this.profesionalesURL + 'foto/' , { params: id, showError: true });
    }
    // getProfesionalFirma(id: string = null): Observable<any> {
    //     return this.server.get(this.profesionalesURL + 'firma/' , { params: id, showError: true });
    // }

    saveProfesional(profesionalModel: any) {
        return this.server.post(this.profesionalesURL, profesionalModel);
    }

    saveProfesionalFoto(foto: any) {
        return this.server.post(this.profesionalesURL + 'foto' , {foto});
    }

    saveProfesionalFirma(firma: any) {
        return this.server.post(this.profesionalesURL + 'firma' , {firma});
    }

    getCredencial(idProf: string): any {
        return this.server.get(this.profesionalesURL + 'matricula/' + idProf);
    }
}


