const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constructionSchema = new Schema({
    "Région": {
        type: String,
        required: true
    },
    "Code Chorus": {
        type: String,
        required: true
    },
    "ID": {
        type: String,
        required: true
    },
    "Type": {
        type: String,
        required: true
    },
    "Fonction": {
        type: String,
        required: true
    },
    "Désignation Bâtiment/Terrain": {
        type: String,
        required: true
    },
    "Dept": {
        type: String,
        required: true
    },
    "Adresse": {
        type: String,
        required: true
    },
    "Code Postal": {
        type: String,
        required: true
    },
    "Ville": {
        type: String,
        required: true
    },
    "Pays": {
        type: String,
        required: true
    },
    "Ministère": {
        type: String,
        required: true
    },
}, {
    versionKey: false // retire le champ __v
});

const ConstructionModel = mongoose.model('Construction', constructionSchema );

module.exports = ConstructionModel;