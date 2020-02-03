module.exports = {
  apps: [
    {
      name: "littra mqtt",
      script: "./index.js",
      exec_interpreter: "./node_modules/.bin/babel-node",
      env: {
        PORT: process.env.PORT
      }
    }
  ]
};
