// server.js
const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const devProxy = {
  '/passwordless/start': {
    target: 'http://64.225.118.43:8090',
    pathRewrite: {
      '^/passwordless/start': '/passwordless/start',
    },
    changeOrigin: true,
  },
  '/oauth/token': {
    target: 'http://64.225.118.43:8090',
    pathRewrite: {
      '^/oauth/token': '/oauth/token',
    },
    changeOrigin: true,
  },

  '/api/v1/influencer/me': {
    target: 'http://64.225.118.43:8090',
    pathRewrite: {
      '^/api/v1/influencer/me': '/api/v1/influencer/me',
    },
    changeOrigin: true,
  },
  '/api/v1/influencer/profile': {
    target: 'http://64.225.118.43:8090',
    pathRewrite: {
      '^/api/v1/influencer/me': '/api/v1/influencer/me',
    },
    changeOrigin: true,
  },
  '/api/v1/influencer/image': {
    target: 'http://64.225.118.43:8090',
    pathRewrite: {
      '^/api/v1/influencer/me': '/api/v1/influencer/me',
    },
    changeOrigin: true,
  },
};

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (devProxy) {
      Object.keys(devProxy).forEach(function (context) {
        server.use(createProxyMiddleware(context, devProxy[context]));
      });
    }

    server.all('*', (req, res) => {
      handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
