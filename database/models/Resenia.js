module.exports = (sequelize, DataTypes) => {
    let alias = "Resenias";
    let cols = {
        IdResenias: {
            type: DataTypes.INTEGER(50).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        IdPelicula: { 
            type: DataTypes.INTEGER, 
        },
        IdUsuario: { 
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
        },
        TextoResenia: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        Puntaje: { 
            type: DataTypes.INTEGER.UNSIGNED,
        },
        FechaCreacion: 
        { 
            type: DataTypes.DATE, 
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        FechaActualizacion: { 
            type: DataTypes.DATE, 
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        }

    };

    let config = {
        tableName = "Resenias",
        timeStamps = false
    }

    let Resenias = sequelize.define(alias, cols, config);

    return Resenias;
}