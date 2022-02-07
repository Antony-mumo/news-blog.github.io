module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4a7a108182c5c4113b5a16af6faa9f50'),
  },
});
