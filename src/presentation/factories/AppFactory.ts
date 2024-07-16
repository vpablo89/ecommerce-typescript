import AppExpress from "../application/AppExpress";
import WebAdapter from "../application/WebAdapter";


class AppFactory
{
    static create(appType: string = 'AppExpress'): WebAdapter
    {
     const apps = new Map<string, new ()=>WebAdapter>()
     apps.set('AppExpress', AppExpress)
     
     const App = apps.get(appType)
     if(!App)
     {
        throw new Error(`App type ${appType} not found `)
     }
     return new App()
    }
}

export default AppFactory