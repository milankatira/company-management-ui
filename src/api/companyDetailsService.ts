import apiClient from '../utils/axios';

const API_URL = '/company';

export const fetchCompanyDetails = async (companyId: string) => {
    const response = await apiClient.get(`${API_URL}/${companyId}`);
    return response.data;
};
