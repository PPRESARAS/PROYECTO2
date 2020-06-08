module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        }

    };
    let config = {
        tableName = "usuarios",
        timeStamps = false
    }

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}