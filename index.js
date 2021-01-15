const express = require('express')
const app = express()
require('dotenv').config()
const Yhteystieto = require('./models/henkilo')

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

const morgan = require('morgan')
morgan(':method :url :status :res[content-length] - :response-time ms')
app.use(morgan('tiny'))


/* app.get('/info', (req, res) => {
    const maara = persons.length
    const paiva = new Date()
    res.send(`<p> Phonebook has info for ${maara} people </p> <p> ${paiva} </p>`)
}) 
 */

app.get('/api/persons', (request, response) => {
  Yhteystieto.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
  })
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({ error: 'name missing' })
    }

    if (body.number === undefined) {
        return response.status(400).json({ error: 'number missing' })
    }

    const henkilo = new Yhteystieto( {
        name: body.name,
        number: body.number,
    })

    henkilo.save().then(tallennettuNumero => {
      response.json(tallennettuNumero)
    })
})


app.get('/api/persons/:id', (request, response, next)  => {
  Yhteystieto.findById(request.params.id)
    .then(number => {
      if (number) {
        response.json(number.toJSON)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})


app.delete('/api/persons/:id', (request, response, next)  => {
  Yhteystieto.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}


app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})