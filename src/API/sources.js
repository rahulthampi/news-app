import _ from 'lodash';

const SOURCES_API_ENDPOINT = 'https://newsapi.org/v1/sources?language=en';
const fetchParams = {
  method: 'GET',
};

const getNewsResources = () => fetch(SOURCES_API_ENDPOINT, fetchParams)
  .then(response => response.json())
  .then(json => _.groupBy(json.sources.map(
    ({ id, name, description, category }) => ({
      id,
      name,
      description,
      category,
    })), 'category'))
  .catch(error => ({
    status: 200,
    message: error.message,
  }));

export default getNewsResources;
