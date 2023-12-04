import { DISTRITOS } from "../config/config.js"

export const zonaValidator = (zona) => {
    const esValido = DISTRITOS.includes(zona)
    if (!esValido) {
        throw new Error(`La zona ${zona} no es válida`)
    }
}