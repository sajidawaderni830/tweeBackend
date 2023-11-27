import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();
//curl test
/*  $ curl -X PUT -H "Content-Type: application/json" -d '{"name": "Vadim", "bio": "m", "image": "Vadim"}' http://localhost:3000/user/1
$ curl -X POST -H "Content-Type: application/json" -d '{"name": "Elon Musk", "email": "doge@twitteAr.com", "username": "e1lon"}' http://localhost:3000/user/
 */
//create user
router.post('/',

    async (req, res) => {
        const { email, name, username } = req.body;
        try {
            const result = await prisma.user.create({ data: { email, name, username, bio: "Hello i'm new in twitter" } })
            res.json(result)
        } catch (e) {
            res.status(400).json('username and email should be unique')
        }
    })
//get list user
router.get('/', async (req, res) => {
    const allUser = await prisma.user.findMany();
    res.json(allUser)
})
//get one user 
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    res.json(user)
})
//update user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { bio, image, name } = req.body;
    try {
        const result = await prisma.user.update({
            where: { id: Number(id) },
            data: { bio, name, image }
        })
        res.json(result)
    } catch (e) {
        res.status(400).json({ error: `feild to update user ${id}` })
    }
})
//delete user 
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } })
    res.sendStatus(200)
})

export default router;