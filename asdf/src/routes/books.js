'use strict';

const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.status(200).json('GET / returns all books resources');
    })
    .post((req, res, next) => {
        if (!req.body.title) return next(new Error('Invalid params'));
        return res.status(201).json('POST / creates a new book resource');
    });

router.route('/:id')
    .get((req, res, next) => {
        if (req.params.id === '0') return next();
        return res.status(200).json('GET /:id returns a books resources');
    })
    .put((req, res, next) => {
        if (req.params.id === '0') return next();
        if (!req.body.title) return next(new Error('Invalid params'));
        return res.status(200).json('PUT /:id updates a book resource or creates if not exists');
    })
    .delete((req, res, next) => {
        if (req.params.id === '0') return next();
        return res.status(204);
    });

module.exports = exports = router;
