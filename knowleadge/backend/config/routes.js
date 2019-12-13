/*
    Esse app esta referenciado pelo consign, logo quando
    for chamado a funcao la no index essa variaveis tera
    os artibutos carregado pelo consign, repare que o
    app -> a variavel estipulada dentro o metodo into
    do consign, e api faz referencia a pasta api,
    user faz faz referencia ao user.js e por fim o
    save faz referencia ao metodo que foi exportado
    pelo arquivo user.js O consign muda a forma
    com que voce trabalha com os modulos tratando
    arquivos e diretorios como atributos e evitando
    a necessidade de importar modulos.
*/
module.exports = app =>{
    app.post('/signup',app.api.user.save);
    app.post('/signin',app.api.auth.signin);
    app.post('/validateToken',app.api.auth.validateToken);

    app.route('/users')
    .all(app.config.passport.authenticate())
    .post(app.api.user.save)
    .get(app.api.user.get);

    app.route('/users/:id')
    .all(app.config.passport.authenticate())
    .put(app.api.user.save)
    .get(app.api.user.getById);

    app.route('/categories')
    .all(app.config.passport.authenticate())
    .get(app.api.category.get)
    .post(app.api.category.save);

    /*
    rotas mais especificas sempre
    antes das mais genericas, isso
    faz com que a condicao especifica
    seja atendida, do contrario a
    condicao mais generica sera atendida
    no lugar da mais especifica.
    No caso o /tree eh mais especifico
    do que o /tree/:id, uma vez a 
    rota especifica lida com apenas um 
    parametro especifico na url, o
    tree, enquanto que o mais generico
    lida com qualquer outro parametro
    diferente de tree. 
    */
    app.route('/categories/tree')
    .all(app.config.passport.authenticate())
    .get(app.api.category.getTree);

    app.route('/categories/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.category.getById)
    .put(app.api.category.save)
    .delete(app.api.category.remove);

    app.route('/articles')
    .all(app.config.passport.authenticate())
    .get(app.api.article.get)
    .post(app.api.article.save);

    app.route('/articles/:id')
    .all(app.config.passport.authenticate())
    .get(app.api.article.getById)
    .put(app.api.article.save)
    .delete(app.api.article.remove);

    app.route('/categories/:id/articles')
    .all(app.config.passport.authenticate())
    .get(app.api.article.getByCategory);


}
