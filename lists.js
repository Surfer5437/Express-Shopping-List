const express = require('express')
const router = new express.Router()
const ExpressError = require('./expresserror')
const slist = require('./fakeDB')

router.get('/', function (req, res) {
    res.json({slist})
})

router.post('/', function (req, res) {
    const newItem = { item: req.body.item }
    slist.push(newItem)
    res.status(201).json({slist:newItem})
})

router.get('/:item', function(req,res) {
    const foundItem = slist.find(item => item.item === req.params.item)
    if(foundItem === undefined) {
        throw new ExpressError('Item not found', 404)
    }
    res.json({item: foundItem})
})

router.patch('/:item', function (req, res) {
    const foundItem = slist.find(item => item.item === req.params.item)
    if(foundItem === undefined) {
        throw new ExpressError('Item Not Found', 404)
    }
    foundItem.item = req.body.item;
    res.json({ item: foundItem})
})

router.delete('/:item', function (req, res) {
    const foundItem = slist.findIndex(item => item.item === req.params.item)
    if (foundItem === -1) {
        throw new ExpressError('Item Not Found', 404)
    }
    slist.splice(foundItem, 1)
    res.json({ message: 'Deleted'})
})

module.exports = router;