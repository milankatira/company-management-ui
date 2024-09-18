import apiClient from "../utils/axios";


export interface Company {
    id: string;
    name: string;
    description: string;
}

interface CompanyResponse {
    data: Company[];
    message: string;
    success: boolean;
    totalCount: number;
    totalValue: number;
}

export const fetchCompanies = async (
    pageNumber: number = 1,
    pageSize: number = 10
): Promise<CompanyResponse> => {
    const response = await apiClient.get('/company', {
        params: {
            apiKey: import.meta.env.VITE_API_KEY,
            lat1: 0,
            lat2: 0,
            lon1: 0,
            lon2: 0,
            mapBound: false,
            pageNumber,
            pageSize,
        },
    });

    return response.data;
};
