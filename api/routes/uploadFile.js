var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: '.' })
var publicStorage = __dirname + '/../' + 'public/storage/';

router.post('/',  upload.single('file'), function(req, res, next) {

    var wordFrequencyContainer = {};
    const inputFile = req.files.file;
    try {

        // If public/storage directory doesn't exist create one
        if (!fs.existsSync(publicStorage)){
            console.log("Creating directory ./../public/storage");
            fs.mkdirSync(publicStorage);
        }

        // Place the file inside ./../public/storage directory
        inputFile.mv(`${publicStorage}/${inputFile.name}`, function (error) {
            if (error) {
                console.error('Error:', error);
                return res.status(500).send({ msg: "Error occured" });
            }
        });

        // Read file text and create wordFrequencyContainer => {Key(word) : Value(wordFrequency)}  
        // and send it in response      
        fs.readFile(`${publicStorage}/${inputFile.name}`, "utf8", function (error, data) {
            if (error) throw error;
            data = data.replace(/(\r\n|\n|\r)/gm," ");
            var wordsList = data.trim().split(" ");
            for (wordIndex in wordsList) {
                if (wordsList[wordIndex] == '') continue;
                if (!(wordsList[wordIndex] in wordFrequencyContainer)) {
                    wordFrequencyContainer[wordsList[wordIndex]] = 1;
                } else {
                    wordFrequencyContainer[wordsList[wordIndex]] = wordFrequencyContainer[wordsList[wordIndex]]+1;
                }
            }
            res.setHeader('Content-Type', 'application/json')
            res.send(wordFrequencyContainer);
        });
    }
    catch (error) {
        console.log(error);
    }
});

module.exports = router;