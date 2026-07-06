const authRoutes = require("./routes/authRoutes");

below the middleware:
app.use("/api/auth", authRoutes);
