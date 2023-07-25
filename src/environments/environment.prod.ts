export const environment = {
  production: true,
  msalConfig: {
    auth: {
      clientId: '91cf3203-497a-4d2f-9c21-9f2d37262a4a',
      authority:
        'https://login.microsoftonline.com/b03441e2-ab97-45c2-a6dd-c52e3f5934af',
    },
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'https://neurodiversity-in-business.github.io',
  },
};
