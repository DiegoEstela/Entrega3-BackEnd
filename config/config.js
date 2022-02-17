module.export = {
  fileSystem: {
    path: "./DB",
  },
  mongodb: {
    cnxStr: "mongodb://localhost/ecommerce",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "codereccomerce",
    private_key_id: "fd5371bdf9e6d1d96bc14dd4a689fedad90ac7d5",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCuuCCKzl2MaLG0\n/efceclU1QOClP6DIkDDoBr4bHpB73PRzzLyIrMdNxlpW5UXvncdfaM5HovXTdaq\nrFYb0is+vMUPk0JhGyhPGGkxaT+ZiZCQZS8ZLEirP9yqUHqXBMGl/UiIKiPzg0AB\nYC93JQwt9S87hn+X1abthdt0FIQlhHzyD4BuIHIuGXy7zyhxAVFafYNLWTYemZuI\nsh4r17kchy77nvGh68y8HLTofgqM7ymhYSxjMiBoZmvb9UUFyHDRIBk05FLNUVVW\no0WaZrocwAQdhW30eG9ighrxMUxOx5uj4jNIcOxU5TSjw+Uhx5T7OZQm0m4G2m/e\niB753ak1AgMBAAECggEATB+5PgEPzT9IPf1qais9xxJQRzK3eVcRNKqrVZWd5uB3\na/CE1+66b340Oi1G1mOL7nNxDE/8ycAGSbJwigqWAO2qRlD42OpGM8AFBRxAM5s2\nO1N6o9Mhjktyz1nlL6tI3BNw6LLDmzOSTYck5xpjJhrvi1XcfcD+y/pIVVkjAlzw\n7+vuen5WMNKGPPFOzhTYsY0a9FbFyZIJN4HgtdllG9HIolA4MsEQXOFrY6OzSZm3\nMvDpj/20B6Afj9JNV7qBbXRBZ+lz/uophc+0azlbvUFr1myyKZzBtJio9m4pv0w0\nWI5nGpesWQ1z2DMmrjdhZdgRllVDDSVI1UdMyPNveQKBgQDUjq8C7FPsxUIyIsny\nCyA46DHqUJoEzxoEfQe3XWctoplxsOPyoiuw7Iw+Fi+RHZT/NAVFxpp0dFEX0tvK\nsx++sn5lw5vUbpLRm4t10XEyQ975MzibFCrZZk0A7I5dSqBt1KI2TANOZd80UTf0\ngo0iw+qIMBipE3yu+7XgZVrLkwKBgQDSbbKFTZzRlnNsq9oXQeUffWDgh2ZKNqpm\n7EtrYZkPZrd1WiS2WiED7WKqhlv30Yh0zH/iOnsgHbezP9Nyc3AmL9253DvIC4Z5\n+gUEmekKxfzFoag2Y98+uJrBjhW+bZ+NckV10E+lWcALbMCz6ds36V4mUZL46S2u\nSV36zIaFFwKBgEFIETg0nRH7A3midaOBB0RzC+GLH8KaWMNIIzaN2UKKzdW9HkVG\nyWRtQiVPawyGqVw3/eaQOJ/LmZxXhmma2gUXjPp0OUflLfJyc0KcMMffUHv430nB\nx+c9JClEffTpFpyk0a0ba2iIoSTQTP8rmW0z/rQVEX3cHk8fv5xLhLdBAoGAQ62Q\nWxtJModm/C6RaCWDYYtbmxsxJPFMAOpCn3i2V6O7oXyqjhOSxsaUky+/aIb1kksr\nXkFc1El6iaYfhZHnIgEHGP3iJEbAq35kGsS9lP90esOxbDzW0j9hVpsyFxr+0+lK\nuceTtiSVhZcmqzatkN/3re9Si8fDL2jdVwpswWUCgYA2uPvC/+O+rriPbiEPot48\nnhjatFZFWYxxXV98GfA29VGZeGJfV79hHxbcAA6EcbkGof5HqwFrdy7rjZu5g20Y\na5itG1KlPtWP3HLPbgGvXw4BG8skAoUQ6Duc+AduSvcxxJdOZPyhPw1kWFxDndhB\nRrSaYpw8roR0v3NpOdiSJw==\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-3n9vf@codereccomerce.iam.gserviceaccount.com",
    client_id: "110117507576572498364",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3n9vf%40codereccomerce.iam.gserviceaccount.com",
  },
};
