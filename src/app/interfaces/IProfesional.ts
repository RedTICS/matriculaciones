import {
    Sexo,
    EstadoCivil,
    TipoContacto,
    TipoDomicilio
} from './../utils/enumerados';

export interface IProfesional {
    id: string;
    habilitado: Boolean;
    nombre: string;
    apellido: string;
    documento: string;
    documentoVencimiento: Date;
    cuit: string;
    fechaNacimiento: Date;
    lugarNacimiento: string;
    nacionalidad: {
        nombre: string;
        codigo: number;
    };
    sexo: Sexo;
    estadoCivil: EstadoCivil;
    contactos: [{
        tipo: string;
        valor: string;
        rank: number;
        ultimaActualizacion: Date;
        activo: boolean;
    }];
    domicilios: [{
        tipo: string;
        valor: string;
        codigoPostal: string;
        ubicacion: {
            localidad: string;
            provincia: string;
            pais: string
        };
        ultimaActualizacion: Date;
        activo: boolean;
    }];
    fotoArchivo: string;
    firmas: [{
        imgArchivo: string;
        fecha: Date;
    }];
    formacionGrado: [{
        profesion: {
            nombre: string;
            codigo: number;
            tipoDeFormacion: String;
        };
        entidadFormadora: {
            nombre: string;
            codigo: number;
        };
        titulo: string;
        fechaEgreso: Date;
        fechaTitulo: Date;
        renovacion: boolean;
        papelesVerificados: boolean;
        matriculacion?: [{
            matriculaNumero: Number;
            libro: String;
            folio: String;
            inicio: Date;
            baja: {
                motivo: '',
                fecha: Date
            }
            fin: Date;
            revalidacionNumero: Number;
        }];
        matriculado: boolean
    }];
    formacionPosgrado: [{
        profesion: {
            nombre: string;
            codigo: number;
        };
        institucionFormadora: {
            nombre: string;
            codigo: number;
        };
        especialidad: {
            nombre: string;
            codigo: number;
        };
        fechaIngreso: Date;
        fechaEgreso: Date;
        observacion: String;
        certificacion: {
            fecha: Date;
            modalidad: {
                nombre: string;
                codigo: number;
            };
            establecimiento: {
                nombre: string;
                codigo: number;
            };
        };
        matriculacion?: [
            {
            matriculaNumero: Number;
            libro: String;
            folio: String;
            inicio: Date;
            baja: {
                motivo: '',
                fecha: null
            }
            fin: Date;
            revalidacionNumero: Number;
        }
    ]
    papelesVerificados: boolean;
    matriculado: boolean;
    revalida: boolean;
    }];
    origen: String;
    sanciones:  [{
        numero: Number;
        sancion: {
            id: Number;
            nombre: String;
        },
        motivo: String;
        normaLegal: String;
        fecha: Date;
        vencimiento: Date;
    }];
    OtrosDatos:  [{
        matriculaProvincial: Number;
        folio: String;
        libro: String;
        anio: Number;
    }];
    notas: String;
    rematriculado: Boolean;
    agenteMatriculador: String;
    idRenovacion: String;
    documentoViejo: Number;
}
