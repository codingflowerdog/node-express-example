import { Router, Request, Response } from 'express';
import {create, find, findById, update} from "../services/resourceService";
const resourceRouter = Router();

/**
 * 리소스 목록 조회
 */
resourceRouter.get('/resources', async (req: Request, res: Response) => {
    const result = await find(req, res);

    res.json(result);
});

/**
 * 리소스 목록 조회
 */
resourceRouter.get('/resources/:resourceId', async (req: Request, res: Response) => {
    const result =await findById(req, res);
    res.json(result);
});

/**
 * 리소스 생성
 */
resourceRouter.post('/resources/resource', async (req: Request, res: Response) => {
    await create(req, res);
    res.send(200);
});

/**
 * 리소스 변경
 */
resourceRouter.patch('/resources/:resourceId', async (req: Request, res: Response) => {
    await update(req, res);
    res.send(200);
});

export {resourceRouter};