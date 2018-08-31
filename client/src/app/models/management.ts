export class Management {
  private idManagement: number
  private description: string

  constructor(idManagement = null, description = '') {
    this.idManagement = idManagement
    this.description = description

  }

  public getIdManagement() {
    return this.idManagement
  }

  public setIdManagement(idManagement: number) {
    this.idManagement = idManagement
  }
}