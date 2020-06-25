'use strict'

class RouletteController {

    async show({view}){
    
       return view.render('roulettes.show')
    }
}

module.exports = RouletteController
