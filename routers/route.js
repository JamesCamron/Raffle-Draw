const router = require('express').Router();
const tickets = require('./tickets')
 
router.use('/api/v1/tickets',tickets);

router.get('/health',(_req,res)=>{
	res.status(200).json({message: 'Success'});
});

module.exports = router;