
import Factory from "../DAOs/Factory.js";
class xApi {
  constructor() {
    this.factory = Factory.factory();
  }
  create = async (voto) => {
    try {
      const data = await this.factory.xDao.createDao(voto);
      return data;
    } catch (error) {
      return error;
    }
  };
  getAllxZona = (zona) => {
    try {
      const data = this.factory.xDao.getAllxZona(zona);
      return data;
    } catch (error) {
      return error;
    }
  };

  insertBulk = async (votos) => {
      const data = this.factory.xDao.insertBulk(votos);
      return data;
  };
   
}

export default xApi;
