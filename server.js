const express = require("express");
const app = express();
const {
  userRoutes,
  productRoutes,
  router,
  authRoutes,
} = require("./routes/index");

// middle ware
app.use(express.json());

// middleware
app.use(router);
app.use(productRoutes);
app.use(userRoutes);
app.use(authRoutes);

app.listen(5000, () => {
  console.log("server is running...");
});
