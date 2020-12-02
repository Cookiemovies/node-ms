const towns = [
    {id:1, name:'Munich',  pop: 1300000},
    {id:2, name:'Berlin',  pop: 3500000},
    {id:3, name:'Hamburg', pop: 2000000}
];

function getTownById(id) {
    return towns.filter(
        function(townfound) {
            return townfound.id == id
        }
    );
}

function getTownByName(name) {
    return towns.filter(
        function(townfound) {
            return townfound.name == name
        }
    );
}

var town = {
    listTowns: function(req, res) {
        res.send(towns);    
    },

    findId: function(req, res) {
        const townId = parseInt(req.params.id);
        const found = getTownById(townId);
        if (found) {
            console.log('id found ok');
            res.send(found);
        } else {
            console.log(`Town not found.`);
            res.status(404).send(`Town not found.`);
        }
   },

   findName: function(req, res) {
    const townName = req.params.name;
    const found = getTownByName(townName);
    if (found) {
        console.log('Town found ok');
        res.send(found);
    } else {
        console.log(`Town not found.`);
        res.status(404).send(`Town not found.`);
    }
}
};

module.exports = town;