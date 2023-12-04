export const validateParams = (distrito, candidato) => {
    let errors = [];
    try {
        candidatoValidate(candidato);
    } catch (error) {
        errors.push(error.message);
    }

    try {
        zonaValidator(distrito);
    } catch (error) {
        errors.push(error.message);
    }

    return errors;
};
