import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anúncio'},
        { id: 2, name: 'Anúncio'},
        { id: 3, name: 'Anúncio'},
        { id: 4, name: 'Anúncio'}
    ])
})

app.listen(3333)