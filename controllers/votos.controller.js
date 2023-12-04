import xApi from '../Api/xApi.js';
import { ApiResponse } from '../models/api-response.js';
import { candidatoValidate } from '../validators/candidato.validator.js';
import { zonaValidator } from '../validators/zona.validator.js';
const xapi = new xApi();

export class VotoController {
    constructor() {}
    create = async (req, res) => {
        try {
            const { distrito, candidato } = req.body;
            
            //VALIDACION DE DATOS            
            if (!distrito || !candidato) throw new Error('Faltan datos');
            const errors = validateParams(distrito, candidato);
            if(errors.length > 0) throw new Error(errors.join(', '))

            xapi.create({distrito, candidato});

            res.status(200).send(new ApiResponse(true, 'Voto registrado', {distrito, candidato}));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    };
}

const validateParams = (distrito, candidato) => {
    let errors = []
    try {
        candidatoValidate(candidato);
    }
    catch (error) {
        errors.push(error.message);
    }

    try {
        zonaValidator(distrito);
    } catch (error) {
        errors.push(error.message);        
    }

    return errors;
}
