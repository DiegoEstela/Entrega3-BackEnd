const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
// Middlewares //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(process.cwd() + "/public"));
// passport //

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
