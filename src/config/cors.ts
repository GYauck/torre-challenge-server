/* const origin : checkNodeEnvironment(
  "https://bonum-movies.vercel.app",
  "http://localhost:3000"
); */

const corsConfig = {
  origin : "https://torre-challenge-pi.vercel.app",
  credentials: true,
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
};

export default corsConfig;