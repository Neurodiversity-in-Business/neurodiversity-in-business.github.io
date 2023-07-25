export const environment = {
  production: true,
  msalConfig: {
    auth: {
      clientId: '6f3bb1f9-e622-4235-a5f7-5a33286d9a4a',
      authority:
        'https://login.microsoftonline.com/b03441e2-ab97-45c2-a6dd-c52e3f5934af',
    },
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'https://neurodiversity-in-buisness.github.io',
  },
};
