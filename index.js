const express = require("express");
const apiRoutes = require('./routes/api.js');
const adminRoutes = require('./routes/admin.js')

const app = express();
app.use(express.static("public"));
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/', adminRoutes);

app.listen(3000);
