// http://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 3000




// https://band.us/band/76244612?referrer=
app.use(express.static('public'))

const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
    //__dirname : It will resolve to your project folder.
});



//인식
router.get('/inchic/01', function (req, res) {
    res.sendFile(path.join(__dirname + '/inchic/01_intro.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/02_0', function (req, res) {
    res.sendFile(path.join(__dirname + '/inchic/02_0whereToScriptTag.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/02_1', function (req, res) {
    res.sendFile(path.join(__dirname + '/inchic/02_1bodyTag.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/02_2', function (req, res) {
    res.sendFile(path.join(__dirname + '/inchic/02_2externalFile.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/03_0', function (req, res) {
    res.sendFile(path.join(__dirname + '/inchic/03_0outputDisplay.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/03_1', function (req, res) {
    res.sendFile(path.join(__dirname + '/inchic/03_1windowAlert.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/03_2', function (req, res) {
    res.sendFile(path.join(__dirname + '/inchic/03_2consoleLog.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/public/190722/01', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/190722/01_output_1.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/03_3', function (req, res) {
    res.sendFile(path.join(__dirname + '/inchic/04_1output.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/public/190722/02', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/190722/02_switch.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/public/190722/03', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/190722/03_string_1.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/public/190722/04', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/190722/04_string_2.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/inchic/18', function (req, res) {
    res.sendFile(path.join(__dirname + '/inchic/18_onsubmit.html'));
    //__dirname : It will resolve to your project folder.
});




//인식 응답자
router.get('/inchic', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + 'email:' + req.query.email + 'user name:' + req.query.userName + 'password' + req.query.passWord)
});

router.get('/login', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : ' + 'name:' + req.query.name + 'password:' + req.query.password)
});





app.use('/', router);





// http://expressjs.com/en/starter/hello-world.html

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

