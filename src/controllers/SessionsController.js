const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const authConfig = require("../config/auth");

const { sign } = require("jsonwebtoken");
const { compare } = require("bcryptjs");  


class SessionsController {
  async create(request, response) {
    const { email, password } = request.body

    // authenticate user's register 
    const user = await knex("users").where({ email }).first();

    if (!user) {
      throw new AppError("E-mail ou senha incorreta", 401);
    }

    // authenticate user's password
    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new AppError("E-mail ou senha incorreta", 401);
    }

    // create token
    const { secret, expiresIn } = authConfig.jwt;
    
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    });

    return response.json({ user, token });
  }
}

module.exports = SessionsController;