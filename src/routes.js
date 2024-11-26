const express = require("express");
const { login, protectedContent, whisperContent, getGit } = require("./controllers/authController");

const router = express.Router();

// Rota pública
router.get("/", (request, response) => {
  response.json({ message: "Endpoint que não exige autenticação!" });
});

// Rota de login
router.post("/login", login);

// Rota protegida
router.get("/protected", protectedContent);
router.get("/whisper", whisperContent);
router.get("/git", getGit);
router.get("/github", getGit);

module.exports = router;