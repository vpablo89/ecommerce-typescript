// import supertest from "supertest";
// import initServer from ".";
// import container from "../container";

import UserSchema from '@/data/model/product/mongoose/UserSchema'



// const setVariables = async () => {

//     const { app, db } = await initServer()
//     const application = app.callback()
//     const requester = supertest(application)

//     return { app, db, requester }
// }


describe('GET /api/v1/users', function () {

    beforeAll(async function createContext() {  
    })

    test('Should create a Mongoose model for User', async function () { 
    
        const schema = new UserSchema()        
        expect(schema)
        .toBeInstanceOf(UserSchema)
    
    })
})
