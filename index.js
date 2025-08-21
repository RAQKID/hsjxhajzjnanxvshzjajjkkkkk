import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Fix dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Route for root (http://localhost:3000/)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "teams.html"));
});

// Route for teams.html
app.get("/teams.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "teams.html"));
});

// Catch-all for invalid routes -> redirect to teams.html
app.use((req, res) => {
  res.redirect("/teams.html");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});