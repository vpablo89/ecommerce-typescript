import dotenv from 'dotenv'
dotenv.config()

import { createContainer, asClass, Lifetime } from 'awilix'

import ProductMongooseRepository from './data/repository/mongoose/ProductMongooseRepository'

const container = createContainer()


container.register('ProductRepository', asClass(ProductMongooseRepository, {lifetime: Lifetime.SINGLETON}))

export default container



