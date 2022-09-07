export class staffingData {
    id: number
    developerName: string
    project: string
    leadName: string
    moduleLeadName: string
    staffing: string
    role: string
    bill: string
    frameworkTool: string
    cssFramework: string
    joiningDate: any
    releaseDate: any
    status: string
    spendHours: number
    comments: string


    constructor(id: number, developerName: string,
        project: string, leadName: string,
        moduleLeadName: string,
        staffing: string,
        role: string,
        bill: string,
        frameworkTool: string,
        cssFramework: string,
        joiningDate: Date,
        releaseDate: Date,
        status: string,
        spendHours: number,
        comments: string) 
        
    {
        this.id = id
        this.developerName = developerName
        this.project = project
        this.leadName = leadName
        this.moduleLeadName = moduleLeadName
        this.staffing = staffing
        this.role = role
        this.bill = bill
        this.frameworkTool = frameworkTool
        this.cssFramework = cssFramework
        this.joiningDate = joiningDate
        this.releaseDate = releaseDate
        this.status = status
        this.spendHours = spendHours
        this.comments = comments
    }
}