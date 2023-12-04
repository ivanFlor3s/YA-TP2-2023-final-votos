import xApi from "../Api/xApi.js";
const xapi = new xApi();

class Controller {
  constructor() {}

  create = async (req, res) => {
    try {
      const { palabra } = req.body;
      if (!palabra) throw new Error("palabra vacia");
      const data = await xapi.create(palabra);
      res.status(200).send(data);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };
  getAll = async (req, res) => {
    try {
      const data = await xapi.getAll();
      res.status(200).send(data);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };

  getAmount = async (req, res) => {
    try {
      const { amount } = req.params;
      const data = await xapi.getAmount(amount);
      res.status(200).send(data);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  };
}

export default Controller;
