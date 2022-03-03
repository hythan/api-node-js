exports.indexPage = (req, res) => {
    res.render('index', {teste: 'Minha variavel'});
    console.log(req.session)
}

exports.formPost = (req, res) => {
    res.send('Testeweee!!!')
    console.log(req.session)

}