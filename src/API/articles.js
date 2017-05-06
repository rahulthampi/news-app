const getArticles = (selectedSource) => {
  const API_KEY = 'ae05d1e02d2046b48a4e44223b397237';
  const ARTICLES_API_ENDPOINT = `https://newsapi.org/v1/articles?source=${selectedSource}&apiKey=${API_KEY}`;
  const fetchParams = {
    method: 'GET',
  };

  return fetch(ARTICLES_API_ENDPOINT, fetchParams)
    .then((response) => {
      console.log('response > ', response);
      return response.json();
    })
    .then((json) => {
      console.log('json > ', json);
    })
    .catch(error => ({
      status: 200,
      message: error.message,
    }));
};

export default getArticles;
