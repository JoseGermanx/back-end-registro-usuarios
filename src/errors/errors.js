

class SistemError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

// exportar la clase
module.exports = SistemError;
