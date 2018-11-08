module.exports = function(app){
    var api = {};

    api.cadastrarUsuario = function(req,res){
        console.log(req.body);

        res.status(201).json({message: "cadastrado com sucesso"});
        
    }
    api.listarUsuarios = function(req,res){
        var objeto =[
            {"nome":"A","idade":"25"},
            {"nome":"B","idade":"25"},
            {"nome":"C","idade":"25"},
            {"nome":"D","idade":"25"}
        ]
        res.status(200).json({usuarios: objeto});
    }

    api.alterarUsuario = (req,res) =>{
        var idUsuarios = req.params.id;
        console.log(idUsuarios);
        res.status(200).json({usurio: idUsuarios});
    }

    api.deletarUsuario = (req,res) =>{
        var idUsuarios = req.params.id;
        console.log(idUsuarios);
        res.status(200).json({usurio: idUsuarios});
    }

    return api;
}