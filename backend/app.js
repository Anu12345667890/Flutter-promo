const express = require("express");
const bodyParser = require("body-parser");
const UserRoute = require("./routes/user.routes");
const PromoRoute = require("./routes/promo.routes");
const app = express();

app.use(bodyParser.json());

app.use("/", UserRoute);
app.use("/", PromoRoute); 

module.exports = app;












































// const express = require("express");
// const bodyParser = require("body-parser")
// const UserRoute = require("./routes/user.routes");
// const ToDoRoute = require("./routes/todo.routes");
// const app = express();

// app.use(bodyParser.json())

// app.use("/",UserRoute);
// app.use("/",ToDoRoute);


// module.exports = app;