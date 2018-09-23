export class Dependency {
    private idDependency: number
    private depDescription: string
    private depManagement: string
    //private idManagement

    constructor(idDependency = null, idManagement=null, depDescription = '', depManagement = '') {
        this.idDependency = idDependency
        this.depDescription = depDescription
        this.depManagement = depManagement
        //this.idManagement = idManagement
    }

    public getIdDependency() {
        return this.idDependency
    }
    public getDepManagement() {
        return this.depManagement
    }
    public setDepManagement(management) {
        this.depManagement = management
    }
}