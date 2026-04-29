module.exports = {
  apps: [
    {
      name: "portfolio-frontend",
      cwd: "apps/frontend",
      script: "pnpm",
      args: `start -- -H 0.0.0.0 -p ${process.env.FRONTEND_PORT || "3000"}`,
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "portfolio-backend",
      cwd: "apps/backend",
      script: "uv",
      args: `run uvicorn app.main:app --host 0.0.0.0 --port ${process.env.BACKEND_PORT || "8000"}`
    }
  ]
};
