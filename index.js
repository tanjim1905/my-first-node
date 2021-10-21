const express = require('express');
const cors = require('cors');
const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world! I love JS, I m noob in Node Js.');
});

const users = [
    {
        id: 0, name: 'tanjim', email: 'tanjim@gamil.com'
    },
    {
        id: 1, name: 'ahmed', email: 'ahmed@gamil.com'
    },
    {
        id: 2, name: 'tanjim ahmed', email: 'tanjimahmed@gamil.com'
    },
    {
        id: 3, name: 'tanjim-ahmed', email: 'ahmedtanjim@gamil.com'
    }
]



app.get('/users', (req, res) => {
    const search = req.query.search;

    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else{
        res.send(users);
    }
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    // console.log('Post Hitting', req.body);

    res.json(newUser);
    res.send('inside post')
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('Listenig my port', port);
});

