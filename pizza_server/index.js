const app = require('express')();
//const express = require('express'),
    //app = express();
    require('dotenv').config({path: './.env'});
    mongoose = require('mongoose'),
    catRoute = require('./routes/MenuCategoryRoute'),
    prodRoute = require('./routes/MenuProductRoute'),
    ingRoute = require('./routes/IngredientRoute');
    payRoute = require('./routes/PaymentRoute');
    userRoute = require('./routes/UserRoute');

    const port = process.env.port || 3040;

    bodyParser = require('body-parser');
//let port = process.env.PORT || 3000
// =================== initial settings ===================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// connnect to mongo
console.log(process.env.MONGO)
// connecting to mongo and checking if DB is running
async function connecting() {
    try {
        await mongoose.connect(process.env.MONGO, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Connected to the DB')
    } catch (error) {
        console.log('ERROR: Seems like your DB is not running, please start it up !!!');
    }
}
connecting()
// temp stuff to suppress internal warning of mongoose which would be updated by them soon
mongoose.set('useCreateIndex', true);
// end of connecting to mongo and checking if DB is running
const cors = require('cors');
app.use(cors());
// routes
app.use('/category', catRoute);
app.use('/product', prodRoute);
app.use('/ingredient', ingRoute);
app.use('/users', userRoute);
app.use('/payment', payRoute);
// Set the server to listen on port 3000
app.listen(port, () => console.log(`listening on port ${port}`))
