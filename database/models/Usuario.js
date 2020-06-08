module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
        IdUsuarios: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        NombreDeUsuario: { 
            type: DataTypes.STRING, 
            autoincrement: true, 
            allowNull: false,
            unique: true,
        },
        EmailDeUsuario: { 
            type: DataTypes.STRING(45), 
            allowNull: false,
            unique: true,
        },
        ContraseniaDeUsuario: {
            type: DataTypes.CHAR(80),
            allowNull: false,
            defaultValue: "",
        },
        FechaDeNacimiento: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },

    };

    let config = {
        tableName = "Usuarios",
        timeStamps = false
    }

    let Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}