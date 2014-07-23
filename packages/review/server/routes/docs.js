'use strict';

var docs = require('../controllers/docs'); // importamos controlador

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
    if (!req.user.isAdmin && req.doct.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};


// The Package is past automatically as first parameter
module.exports = function(Doc, app, auth, database) {


    app.route('/docs')
        // Listar estudiantes
        .get(docs.all) 
        // Registrar estudiante
        .post(auth.requiresLogin, docs.create);

    app.route('/docs/:doctId')
        .get(docs.show)
        .put(docs.update)
        .post(docs.update)
        .delete(auth.requiresLogin, hasAuthorization, docs.destroy);

        
    // Finish with setting up the articleId param
    app.param('doctId', docs.doc);
};
