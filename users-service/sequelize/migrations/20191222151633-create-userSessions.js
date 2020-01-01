module.exports.up = (queryInterface, DataTypes) => {
  // 建立名為 userSessions 的 table及所需要的 schema
  return queryInterface.createTable("userSessions", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    userId: {
      allowNull: false,
      references: {
        key: "id",
        model: "users"
      },
      type: DataTypes.UUID
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    expiresAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    charset: "utf8"
  });
}

module.exports.down = queryInterface => queryInterface.dropTable("userSessions");