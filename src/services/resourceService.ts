import {Resource} from "data/entity/resource";
import { Request, Response } from 'express';
import {ResourceRepository} from "../repository/resourceRepository";
import {error} from "../constans";

async function find(req: Request, res: Response): Promise<Array<Resource>> {
    const resources: Array<Resource> = await ResourceRepository.findAll();

    return resources;
}

async function findById(req: Request, res: Response): Promise<Resource> {
    const resourceId: number = req.params.resourceId as unknown as number;

    const resource: Resource | null = await ResourceRepository.findById(resourceId);

    return resource!;
}

async function create(req: Request, res: Response): Promise<void>  {
    console.log(req.body)
    const {name} = req.body;

    const resource: Resource = ResourceRepository.create({
        name: name,
        isUsed: true
    });

    await ResourceRepository.save(resource);

}

async function update(req: Request, res: Response): Promise<void> {
    const resourceId: number = req.params.resourceId as unknown as number;
    const {name} = req.body;

    const resource: Resource | null = await ResourceRepository.findById(resourceId);

    if (!resource) {
        // TODO: 예외처리 추가
        console.error(error.ERR_GET_RESOURCES);
    }

    resource!.name = name;
    await ResourceRepository.save(resource!);
}

export {
    find,
    findById,
    create,
    update
}