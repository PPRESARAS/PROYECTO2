var Usuario = require('./Usuario.js')

module.exports = function (sequelize, DataTypes) {
    const resenia = sequelize.define(
        'Resenia',
        {
            IdResenias: {
                type: DataTypes.INTEGER(50).UNSIGNED,
                primaryKey: true,
                autoincrement: true,
            },
            IdPelicula: {
                type: DataTypes.VARCHAR(45),
            },
            IdUsuario: {
                type: DataTypes.INTEGER(11).UNSIGNED,
                allowNull: false,
            },
            TextoResenia: {
                type: DataTypes.STRING(500),
                allowNull: true,
            },
            Puntaje: { 
                type: DataTypes.DECIMAL,
            },
            FechaCreacion: { 
                type: DataTypes.DATE, 
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            },
            FechaActualizacion: { 
                type: DataTypes.DATEONLY, 
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            }
        },
        {
            tableName: 'Resenias',
            timestamps: true // columnas de created y updated
        }
    );
    return Resenia;
}