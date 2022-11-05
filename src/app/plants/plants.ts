export class Plants {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  altura_maxima: number;
  clima: string;
  sustrato_siembra: string;
  public constructor(
    id: number,
    nombre_comun: string,
    tipo: string,
    altura_maxima: number,
    clima: string,
    sustrato_siembra: string,
    nombre_cientifico: string
    )
  {
    this.id = id,
    this.nombre_comun = nombre_comun,
    this.tipo = tipo,
    this.altura_maxima = altura_maxima,
    this.clima = clima,
    this.sustrato_siembra = sustrato_siembra,
    this.nombre_cientifico = nombre_cientifico
  }
}
