var resenia = require('./resenias.js')

module.exports = function (sequelize, DataTypes) {
    // const bcrypt = require("bcryptjs");

    let usuario = sequelize.define(
        'Usuario',
        {
            IdUsuarios: {
                type: DataTypes.INTEGER(11).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            NombreDeUsuario: { 
                type: DataTypes.VARCHAR(45), 
                autoincrement: true, 
                unique: true,
            }, 
            EmailDeUsuario: { 
                type: DataTypes.VARCHAR(45), 
                allowNull: false,
                unique: true,
            },
            ContraseniaDeUsuario: {
                type: DataTypes.VARCHAR(80),
                allowNull: false,
                defaultValue: "",
            },
            FechaDeNacimiento: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: 'Usuarios',
            timestamps: false,
        }
    );

    return Usuario;
}