import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7700/api/v1/report/';

class ReportService {
  getPublicContent() {
    return axios.get(API_URL + 'all',{ headers: authHeader() });
  }

}

export default new ReportService();
