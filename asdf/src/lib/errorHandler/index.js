/**
 * index.js
 * lib/errorHandler
 *
 * Created by samover on 24/09/2016.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';

module.exports = exports = (err, req, res) => {
    if (process.env.NODE_ENV === 'development') {
        res.status(err.status || 500).send({
            message: err.message,
            error: JSON.stringify(err),
        });
    } else {
        res.status(err.status || 500).send({
            message: err.message,
            error: {},
        });
    }
};
