// ServiceWorkerRegistration.js file ka 2 main kaam hota hai server ko start krna or databse se connect karna
require('dotenv').config()
const app = require("./src/app");

const connetToDb = require('./src/config/database')

connetToDb()

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
