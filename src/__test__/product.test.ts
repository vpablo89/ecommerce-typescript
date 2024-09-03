import supertest from "supertest";
import initServer from ".";
import container from "@/container";
import ProductMongooseRepository from "@/data/repository/product/mongoose/ProductMongooseRepository";





const setVariables = async () => {

    const { app, db } = await initServer()
    const application = app.callback()
    const requester = supertest(application)

    return { app, db, requester }
}



describe('GET /api/v1/products', function () {

    beforeAll(async function createContext() {


    })

    test('products are returned as json', async function () {

        const { requester } = await setVariables()



        await requester
            .get('/api/v1/products')
            .expect(200)
            .expect('Content-Type', /application\/json/)


    })

    test('POST /api/v1/products crear un producto', async function () {

        const { requester } = await setVariables()
        const payload = {
            "title": "title2",
            "description": "description1",
            "code": "code5672",
            "price": 1,
            "status": true,
            "stock": 10,
            "category": "category1",
            "thumbnail": "thumbnail1"


        }

        await requester
            .post('/api/v1/products')
            .send(payload)
            .expect(201)
            .expect('Content-Type', /application\/json/)

    })

    test('Se debe crear una instancia de ProductMongooseRepository', async function () {
        const repository = container.resolve('ProductRepository')

        expect(repository).toBeInstanceOf(ProductMongooseRepository)
        

    })
})


