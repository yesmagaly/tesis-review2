'use strict';

var professors = require('../controllers/professors'); // importamos controlador

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
    if (!req.user.isAdmin && req.student.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

// The Package is past automatically as first parameter
module.exports = function(Professor, app, auth, database) {


    app.route('/professors')
        // Listar estudiantes
        .get(professors.all) 
        // Registrar estudiante
        .post(auth.requiresLogin, professors.create);

     app.route('/professors/:professorId')
        .get(professors.show)
        .put(professors.update)
        .delete(auth.requiresLogin, hasAuthorization, professors.destroy);
        
     // Finish with setting up the articleId param
    app.param('professorId', professors.professor);

};
