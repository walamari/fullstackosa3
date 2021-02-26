const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const nimi = process.argv[3]
const puhelinumero = process.argv[4]

const url =`mongodb+srv://fullstack:${password}@cluster0.nogrb.mongodb.net/number-app?retryWrites=true&w=majority`
 /* mongodb+srv://fullstack:<password>@cluster0.nogrb.mongodb.net/<dbname>?retryWrites=true&w=majority
 */

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const numberSchema = new mongoose.Schema({
  name: {
  type: String,
  minlength: 3,
  required: true,
  unique: true
  },

  number: {
  type: Number,
  required: true,
  minlength: 8
  }, 

  id: String,
})

numberSchema.plugin(uniqueValidator);


const Yhteystieto = mongoose.model('Yhteystieto', numberSchema)

const numero = new Yhteystieto({
  name: nimi,
  number: puhelinumero,
  id: nimi,
})

/* 
if(process.argv[3] !== undefined && process.argv[4] !== undefined ){

  numero.save().then(response => {
    console.log(`added ${numero.name} number ${numero.number} to phonebook`)
    mongoose.connection.close()
  })
}
else{} */



  Yhteystieto.find({}).then(result => {
    result.forEach(phoneNumber => {
      console.log(phoneNumber)
    })
    mongoose.connection.close()
  })
