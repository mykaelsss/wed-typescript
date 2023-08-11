const WeddingController = require('../controllers/wedding.controller')

module.exports = function(app){
    app.get('/api/wedding', WeddingController.readAll)
    app.post('/api/wedding', WeddingController.create)
    app.put('/api/wedding/:id', WeddingController.update)
    app.delete('/api/wedding/:id', WeddingController.delete)
}
