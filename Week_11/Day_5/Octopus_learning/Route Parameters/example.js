const express = require('express');
const app = express();
const products  = require('./data.js');


app.get('/tutorial/:notion', (req, res) => {
    console.log("req.params: ", req.params)
    res.send(`Tutorial about ${req.params.notion}!`)
    console.log(req);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));

/** 
 *     pathname: '/tutorial/blah',
    path: '/tutorial/blah',
    href: '/tutorial/blah',
    _raw: '/tutorial/blah'
  },
  params: { notion: 'blah' },
 */