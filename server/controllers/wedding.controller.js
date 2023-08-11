const { Wedding } = require('../models/wedding.model')

module.exports = {
    readAll( req, res ){
        Wedding.find()
        .then( people => {
            const sortedPeople = people.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
            res.json({ people: sortedPeople });
        })
        .catch( err => res.json( err ))
    },
    readOne( req, res ){
        Wedding.findOne( { _id: req.params.id } )
        .then( person => res.json({ person : person }))
        .catch( err => res.json( err ))
    },
    create( req, res ){
        const { firstName, lastName } = req.body
        Wedding.create({
            firstName,
            lastName
        })
        .then( person => res.json({ person : person }))
        .catch( err => res.status(400).json(err) )
    },
    update( req, res ){
        Wedding.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then( person => res.json({ person : person }))
        .catch( err => res.status(400).json( err ))
    },
    delete( req, res ){
        Wedding.deleteOne( { _id: req.params.id } )
        .then(person => res.json({ person : person }))
        .catch( err => res.json( err ))
    }
}
