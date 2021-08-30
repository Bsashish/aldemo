import axiosConfig from './index';
export default {
  marketListService(object) {
    return new Promise((resolve, reject) => {
      axiosConfig
        .get(
          '/topten/gains?date=08/18/2021&filter=%7B%22limit%22%3A10%2C%22price%22%3Atrue%2C%22volume%22%3Atrue%2C%22classificationFilterOut%22%3A%5B%22W%22%2C%22U%22%5D%2C%22issueClass%22%3Atrue%7D&force_web_socket=true',
        )
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          resolve(error);
        });
    });
  },
  marketListById(job_id) {
    return new Promise((resolve, reject) => {
      axiosConfig
        .get('/jobs/get?job_id=' + job_id)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          resolve(error);
        });
    });
  },
};
