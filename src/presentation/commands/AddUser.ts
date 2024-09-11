import mongoose from 'mongoose';
import UserManager from '../../domain/manager/UserManager';
import { Command } from 'commander';


const AddUser = new Command('add-user')

AddUser
    .version('0.0.1')
    .description('Add a new user')
    .option('-e, --email <email>', 'User email')
    .option('-fn, --firstName <firstName>', 'User firstName')
    .option('-ln, --lastName <lastName>', 'User lastName')
    .option('-p, --password <password>', 'User password')
    .option('-a, --age <age>', 'User age')
    .option('-ia, --isAdmin <isAdmin>', 'User isAdmin')    
    .action(async (env) => {
        const payload = {
            ...env,
            age: +env.age,
            isAdmin: env.isAdmin === 'true',
          };
      
          const manager = new UserManager();
          const user = await manager.create(payload);
      
          if(user)
          {
             console.log('User created successfully');
          }

    })

    export default AddUser