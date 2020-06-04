var resenia = require('./resenias.js')

module.exports = function (sequelize, DataTypes) {
    const bcrypt = require("bcryptjs");

    let usuario = sequelize.define(
        'Usuario',
        {
            IdUsuarios: {
                type: DataTypes.INTEGER(11).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            NombreDeUsuario: { 
                type: DataTypes.VARCHAR(45), 
                autoincrement: true, 
                allowNull: false,
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
                allowNull: true,
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