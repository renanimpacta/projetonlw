import { http } from "./http";
import "./websocket/client";
import 'reflect-metadata';
import "./websocket/admin";

http.listen(3333, () => console.log("Server is running on port 3333"));

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Aleração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */