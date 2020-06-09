module.exports = (sequelize, DataTypes) => {
    let alias = "Resenia";
    let cols = {
        IdResenias: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        IdPelicula: { 
            type: DataTypes.INTEGER, 
            allowNull: false,
        },
        IdUsuario: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TextoResenia: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Puntaje: { 
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        FechaCreacion: { 
            type: DataTypes.DATE, 
            allowNull: false,
        },
        FechaActualizacion: { 
            type: DataTypes.DATE, 
            allowNull: false,
        }

    };

    let config = {
        tableName : "Resenias",
        timestamps : false
    }

    let Resenia = sequelize.define(alias, cols, config);

    Resenia.associate = function(models){
        Resenia.belongsTo(models.Usuario,{
            as: "Usuario",
            foreignKey: "IdUsuario"
        });
    }

    return Resenia;
}