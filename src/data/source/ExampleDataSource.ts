import { DataSource } from "typeorm"
import {Resource} from "../entity/resource";
import {ResourceRepository} from "../../repository/resourceRepository";

export const ExampleDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "qhdks12!@",
    database: "example_db",
    entities: ["src/data/entity/*.ts"],
    synchronize: true, // DB 컬럼 동기화. 개발 버전에서만 사용해야 함.
    logging: false
})

// Custom Repository 등록
ExampleDataSource.initialize().then(() => {
    ExampleDataSource.getRepository(Resource).extend(ResourceRepository);
    console.log('Data Source has been initialized!');
}).catch((error) => {
    console.error('Error during Data Source initialization:', error);
});