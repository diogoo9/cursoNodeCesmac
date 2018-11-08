module.exports = function(app){

    var usuarioController = app.controllers.usuarioController;

    app.post('/usuario',usuarioController.cadastrarUsuario);
    app.get('/usuario',usuarioController.listarUsuarios);
    app.put('/usuario/:id',usuarioController.alterarUsuario);
    app.delete('/usuario/:id',usuarioController.deletarUsuario);
