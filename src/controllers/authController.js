const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.SECRET_KEY;
const login = (request, response) => {

    const { username, password } = request.body;

    if (username === "professor.lucas" && password === "1234") {

    const payload = {
    
    sub: username,
    name: "Lucas José de Souza",
    iat: Math.floor(Date.now() / 1000),

};

    const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });
    return response.json({ message: "Login bem-sucedido!", token });

}

    response.status(401).json({ message: "Credenciais inválidas" });

};

    const protectedContent = (request, response) => {
    const token = request.headers["authorization"];

    if (!token) {
      return response.status(403).json({ message: "Token não fornecido" });
}

    try {

    const bearerToken = token.split(" ")[1];
    const decoded = jwt.verify(bearerToken, secretKey);

    response.json({ message: "Conteúdo protegido acessado!", user: decoded });

} catch (error) {
    return response.status(403).json({ message: "Token inválido ou expirado" });
}

};

    const whisperContent = (request, response) => {
    const token = request.headers["authorization"];

    if (!token) {
      return response.status(403).json({ message: "Token não fornecido" });
}

try {

    const bearerToken = token.split(" ")[1];
    const decoded = jwt.verify(bearerToken, secretKey);

    response.json({ message: "Teste", whisper: "Testandinho Testandao"});

} catch (error) {
    return response.status(403).json({ message: "Token inválido ou expirado" });

}

};

    const getGit = (request, response) => {
    const token = request.headers["authorization"];

      if (!token) {
        return response.status(403).json({ message: "Token não fornecido" });
}

try {

    const bearerToken = token.split(" ")[1];
    const decoded = jwt.verify(bearerToken, secretKey);

    response.json({ github: "https://github.com/lucas231090"});

} catch (error) {
  return response.status(403).json({ message: "Token inválido ou expirado" });

}
};

module.exports = { login, protectedContent, whisperContent, getGit };