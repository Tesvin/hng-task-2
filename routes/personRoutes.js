const { Router } = require('express')
const {  
    getPerson,
    createPerson,
    updatePerson,
    deletePerson } = require('../controllers/person')

const router = Router();

router.post('/', createPerson);

router.get('/:userId', getPerson);

router.put('/:userId', updatePerson);

router.delete('/:userId', deletePerson);

module.exports = router;