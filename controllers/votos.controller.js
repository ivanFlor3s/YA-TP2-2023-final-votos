import { request } from 'express';
import xApi from '../Api/xApi.js';
import { ApiResponse } from '../models/api-response.js';
import { validateParams } from '../utils/validate-params.js';
import { zonaValidator } from '../validators/zona.validator.js';
import { seedVotos } from '../data/seed-votos.js';

const xapi = new xApi();

export class VotoController {
    constructor() {}
    create = async (req, res) => {
        try {
            const { distrito, candidato } = req.body;

            //VALIDACION DE DATOS
            if (!distrito || !candidato) throw new Error('Faltan datos');
            const errors = validateParams(distrito, candidato);
            if (errors.length > 0) throw new Error(errors.join(', '));

            xapi.create({ distrito, candidato });

            res.status(200).send(new ApiResponse(true, 'Voto registrado', { distrito, candidato }));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    };

    getAllxZona = async (req = request, res) => {
        try {
            const { distrito } = req.query;
            console.log('zona llega', distrito);
            zonaValidator(distrito);

            const votos = xapi.getAllxZona(distrito);

            res.status(200).send(new ApiResponse(true, 'Votos de la zona', votos));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    };

    seedVotos = async (req, res) => {
        const bulk = seedVotos();
        try {
            xapi.insertBulk(bulk);
            res.status(200).send(new ApiResponse(true, 'Votos insertados', null));
        } catch (error) {
            res.status(500).send(new ApiResponse(false, error.message, null));
        }
    };
}
