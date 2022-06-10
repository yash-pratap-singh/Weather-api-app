const express =require('express');
const app=express();
const path=require('path');
const routes=require('./route/routes');

const PORT=process.env.PORT||3500;
app.use(express.static('./views'));

app.use('/css',express.static(path.join(__dirname,'public')));
app.use('/js',express.static(path.join(__dirname,'public')));

app.get('/',routes);

app.listen(PORT,console.log(`Server is running on PORT ${PORT}...`));