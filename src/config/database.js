module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "todo_list",
  define: {
    timestamps: true,
    underscored: true,
  },
};
