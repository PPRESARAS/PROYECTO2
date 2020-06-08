module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
    let cols = {
        IdUsuarios: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        NombreDeUsuario: { 
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true,
        },
        EmailDeUsuario: { 
            type: DataTypes.STRING, 
            allowNull: false,
        },
        ContraseniaDeUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FechaDeNacimiento: {
            type: DataTypes.DATE,
            allowNull: true,
        },

    };

    let config = {
        tableName = 'Usuarios',
        timeStamps = false
    }

    let Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}