export class Config
{

    private static port = "5001"
    private static url = `http://localhost:${this.port}/`
    static imageFolder = `${this.url}uploads`
    static creatEeventUrl = `${this.url}api/v1/event/create`
    static signInUsertUrl = `${this.url}api/v1/user/login`
    static signUpUsertUrl = `${this.url}api/v1/user/signup`
    static getEventstUrl = `${this.url}api/v1/events`
    static getEventById = `${this.url}api/v1/event/`

}