import { CANDIDATOS, DISTRITOS } from "../config/config.js"

const VOTOS_RANDOMS = 50;

export const seedVotos = () => {

    const votos = []
    
    for (let i = 0; i < VOTOS_RANDOMS; i++) {
        votos.push(randomizeVoto())
    }

    return votos
}

const randomizeVoto = () => {
    const candidato = CANDIDATOS[Math.floor(Math.random() * CANDIDATOS.length)];
    const distrito = DISTRITOS[Math.floor(Math.random() * DISTRITOS.length)];

    return {
        candidato,
        distrito
    }

}