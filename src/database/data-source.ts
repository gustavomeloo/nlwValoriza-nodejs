import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/database.sqlite",
    migrations: ["src/database/migrations/*.ts"],
    entities : ["src/entities/*.ts"]
    
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


