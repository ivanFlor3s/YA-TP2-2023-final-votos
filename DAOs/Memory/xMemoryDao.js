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
  getAllDao = async () => {
    try {
      const data = await this.palabras.join(" ");
      return data;
    } catch (error) {
      return error;
    }
  };
  getAmountDao = async (amount) => {
    try {
      const data = await fetch(
        `https://texto.deno.dev/palabras?cantidad=${amount} `
      ).then((info) => info.json());
      return data;
    } catch (error) {
      return error;
    }
  };
}

export default xMemoryDao;
