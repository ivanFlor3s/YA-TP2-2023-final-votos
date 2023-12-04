import { CANDIDATOS } from "../../config/config.js";

class xMemoryDao {
  constructor() {
    this.votos = []; 
  }
  createDao = async (voto) => {
    try {
      this.votos.push(voto);
      console.log('voto guardado en memoria', voto)
      console.log('----------------------------------')
      console.log('votos guardados en memoria', this.votos) 
      return voto;
    } catch (error) {
      return error;
    }
  };
  getAllxZona = (zona) => {
      const votos = this.votos.filter((voto) => voto.distrito === zona);
      const contados = {}
      votos.forEach(voto => {
         if (contados[voto.candidato]){
            contados[voto.candidato] += 1
         } else {
            contados[voto.candidato] = 1
         }
      });

      CANDIDATOS.forEach(c => {
        if(!contados[c]){
          contados[c] = 0
        }
      })

      return contados;
  };
  insertBulk =  (votos) => {
    this.votos.push(...votos);
  };
}

export default xMemoryDao;
