const express = require("express");
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({meassage: 'Get all contacts!'});
})

router.route('/').post((req, res) => {
  res.status(200).json({meassage: 'Create contacts!'});
})

router.route('/:id').get((req, res) => {
  res.status(200).json({meassage: `Get contact for ${req.params.id}`});
})

router.route('/:id').put((req, res) => {
  res.status(200).json({meassage: `Update contact for ${req.params.id}`});
})
router.route('/:id').delete((req, res) => {
  res.status(200).json({meassage: `Delete contact for ${req.params.id}`});
})

module.exports = router;