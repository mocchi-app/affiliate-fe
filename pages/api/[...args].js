import { createProxyMiddleware } from "http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
  },
}

export default createProxyMiddleware({
  target: "https://mocchi-brand-be.herokuapp.com", //the data server
  changeOrigin: true
});
