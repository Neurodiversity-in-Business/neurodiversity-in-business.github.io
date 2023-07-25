export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: 'b5c2e510-4a17-4feb-b219-e55aa5b74144',
      authority:
        'https://login.microsoftonline.com/b03441e2-ab97-45c2-a6dd-c52e3f5934af',
    },
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'http://localhost:4200/',
  },
};
