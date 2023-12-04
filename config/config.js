import "dotenv/config";

const SERVER_PORT = process.env.SERVER_PORT;
const MODE = process.env.MODE;

export { SERVER_PORT, MODE };

export const DISTRITOS = ['zona1','zona2', 'zona3', 'zona4']
export const CANDIDATOS = ['candidatoA', 'candidatoB', 'candidatoC', 'enblanco']