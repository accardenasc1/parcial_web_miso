export class Plant {
  comunName: string;
  type: string;
  clima:string;
  public constructor(comunName:string, type:string,clima:string){
    this.comunName = comunName;
    this.type = type;
    this.clima = clima
  }
}
