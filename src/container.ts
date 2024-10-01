import dotenv from 'dotenv'
dotenv.config()

import { createContainer, asClass, Lifetime } from 'awilix'

import ProductMongooseRepository from './data/repository/product/mongoose/ProductMongooseRepository'
import UserMongooseRepository from './data/repository/user/mongoose/UserMongooseRepository'
import RoleMongooseRepository from './data/repository/role/mongoose/RoleMongooseRepository'

const container = createContainer()


container.register('ProductRepository', asClass(ProductMongooseRepository, {lifetime: Lifetime.SINGLETON}))
container.register('UserRepository', asClass(UserMongooseRepository, {lifetime: Lifetime.SINGLETON}))
container.register('RoleRepository', asClass(RoleMongooseRepository, {lifetime: Lifetime.SINGLETON}))


export default container



