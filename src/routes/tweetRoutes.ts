import { Router } from "express";
const router = Router();
//create tweet
router.post('/', (req, res) => res.status(581).json({ error: 'Not Implement' }))
//get list tweet
router.get('/', (req, res) => res.status(581).json({ error: 'Not Implement' }))
//get one tweet 
router.get('/:id', (req, res) => {
    const {id} = req.params;  
    res.status(581).json({ error: `Not Implement:${id}` })
})
//update tweet
router.put('/:id', (req, res) => {
    const {id} = req.params;  
    res.status(581).json({ error: `Not Implement:${id}` })
})
//delete tweet
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(581).json({ error: `Not Implement:${id}` })
})
export default router;