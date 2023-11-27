import { Router } from "express";
const router = Router();
//create user
router.post('/', (req, res) => res.status(581).json({ error: 'Not Implement' }))
//get list user
router.get('/', (req, res) => res.status(581).json({ error: 'Not Implement' }))
//get one user 
router.get('/:id', (req, res) => {
    const {id} = req.params;  
    res.status(581).json({ error: `Not Implement:${id}` })
})
//update user
router.put('/:id', (req, res) => {
    const {id} = req.params;  
    res.status(581).json({ error: `Not Implement:${id}` })
})
//delete user 
router.delete('/:id', (req, res) => {
    const {id} = req.params;  
    res.status(581).json({ error: `Not Implement:${id}` })
})

export default router;