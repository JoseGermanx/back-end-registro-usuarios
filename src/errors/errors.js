

// crear clase de errores, basado en la clase Error de JS. Incluir un constructor que reciba un mensaje y un código de error.

class SistemError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

// exportar la clase
module.exports = SistemError;
