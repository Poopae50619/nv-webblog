let express = require('express')
const app = express()

app.get('/status', function (req, res){
    res.send('Hello nodejs server')
})

let port = 8081

app.listen(port, function () {
    console.log('Server running on ' + port)
})
// get user by id
app.get('/user/:userId', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน: '+ req.params.userId)
    })
// get all user
app.get('/users', function (req, res) {
    res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
})