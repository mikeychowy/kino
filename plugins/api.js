export default ({ $axios }, inject) => {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json, */*',
      },
    },
  });

  api.setBaseURL('https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies');

  // Inject to context as $api
  inject('api', api);
};
