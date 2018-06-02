var mongoose = require('mongoose');

// Käytetään MongoDB-tietokantaa
mongoose.connect('mongodb://dev:dev@localhost/kanta',
    {
        useMongoClient: true,
    });

// Määritellään Vastaus-schema
var vastausSchema = mongoose.Schema({
    nimi: String,
    supersankari: String
});

// Määritellään Vastaus-malli
var Vastaus = mongoose.model('Vastaus', vastausSchema);

// Määritellään User-schema
var userSchema = mongoose.Schema({
    username: String,
    password: String
});

// Määritellään User-malli
var User = mongoose.model('User', userSchema);


// "Exportoidaan" Vastaus-malli  ja User-mallit jotta niitä voidaan käyttää muualla
exports.Vastaus = Vastaus;
exports.User = User;
