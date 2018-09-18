export class Dependency {
    private idDependency: number
    private depDescription: string
    private depManagement: string

    constructor(idDependency = null, depDescription = '', depManagement = '') {
        this.idDependency = idDependency
        this.depDescription = depDescription
        this.depManagement = depManagement
    }

    public getIdDependency() {
        return this.idDependency
    }
}