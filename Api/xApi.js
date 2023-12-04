// class xApi {
//   constructor() {
//     this.palabras = [];
//   }

//   create = async (palabra) => {
//     try {
//       // vallidar la palabra
//       this.palabras.push(palabra);
//       return await palabra;
//     } catch (error) {
//       return error;
//     }
//   };
//   getAll = async () => {
//     try {
//       // vallidar la palabra
//       const data = await this.palabras.join(" ");
//       return data;
//     } catch (error) {
//       return error;
//     }
//   };
// }

// export default xApi;
// ---------------------------------------------
import Factory from "../DAOs/Factory.js";
class xApi {
  constructor() {
    this.factory = Factory.factory();
  }
  create = async (voto) => {
    try {
      // vallidar la palabra
      const data = await this.factory.xDao.createDao(voto);
      return data;
    } catch (error) {
      return error;
    }
  };
  getAll = async () => {
    try {
      // vallidar la palabra
      const data = await this.factory.xDao.getAllDao();
      return data;
    } catch (error) {
      return error;
    }
  };
   getAmount = async (amount) => {
    try {
      // vallidar amount
      const data = await this.factory.xDao.getAmountDao(amount);
      return data;
    } catch (error) {
      return error;
    }
  };
}

export default xApi;
