var User = require('./usuario.js')

module.exports = function (sequelize, DataTypes) {
    const resenia = sequelize.define(
        'Resenia',
        {
            id: {
                type: DataTypes.INTEGER(11).UNSIGNED,
                primaryKey: true,
                autoincrement: true,
            },
            series_id: {
                type: DataTypes.INTEGER,
            },
            user_id: {
                type: DataTypes.INTEGER(11).UNSIGNED,
                allowNull: false,
                // references: {
                //     model: 'user',
                //     key: 'id',
                // },
            },
            series_review: {
                type: DataTypes.STRING(500),
                allowNull: true,
            },
            rating: { 
                type: DataTypes.INTEGER.UNSIGNED,
            },
            createdAt: 
            { 
                type: DataTypes.DATEONLY, 
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: { 
                type: DataTypes.DATEONLY, 
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            }
        },
        {
            tableName: 'resenias',
            timestamps: true // columnas de created y updated
        }
    );

    // review.associate = function(models) {
    //     review.belongsTo(models.User, {
    //         as: 'user',
    //         foreignKey: 'user_id',
    //     });
    // }

    // review.beforeCreate(review => {
    //     if (review.rating > 10 || review.rating < 0) {
                 // no lo guardes
    //     }
    // })

    return resenia;
}