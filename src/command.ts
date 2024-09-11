import mongoose from "mongoose"
import { exit } from 'shelljs'
import { program } from 'commander'
import dotenv from 'dotenv'
import AddUser from "./presentation/commands/AddUser"
dotenv.config()


void (async () => {
    try {
        await mongoose.connect(process.env.DB_URI || '')

        program.addCommand(AddUser)

        await program.parseAsync(process.argv)

        exit()


    } catch (error) {
            await console.error(error)
            exit()

    }
})()