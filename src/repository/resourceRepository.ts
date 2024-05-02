import {ExampleDataSource} from "../data/source/ExampleDataSource";
import {Resource} from "../data/entity/resource";

export const ResourceRepository = ExampleDataSource.getRepository(Resource).extend({
    async findAll(): Promise<Array<Resource>> {
        return this.find();
    },
    async findById(id: number): Promise<Resource | null> {
        return this.findOne({
            where: [{
                id: id,
            }]
        });
    }
})