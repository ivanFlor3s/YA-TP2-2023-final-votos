import { CANDIDATOS } from "../config/config.js"

export const candidatoValidate = (candidato) => {
    const candidatoIsValid = CANDIDATOS.includes(candidato)
    if (!candidatoIsValid) {
        throw new Error(`El candidato ${candidato} no es válido`)
    }
}