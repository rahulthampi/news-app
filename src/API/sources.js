const SOURCES_API_ENDPOINT = 'https://newsapi.org/v1/sources';

const getNewsResources = () => fetch(SOURCES_API_ENDPOINT)
  .then(response => response.json())
  .then(json => json.sources.map(
    ({ id, name, description, category, sortBysAvailable }) => ({
      id,
      name,
      description,
      category,
      sortBysAvailable,
    }),
  ))
  .catch(error => ({
    status: 200,
    message: error.message,
  }));

export default getNewsResources;
