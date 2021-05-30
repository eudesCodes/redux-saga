import { getAxiosInstance } from 'src/api.fetch/instance';
import { AxiosResponse } from 'axios';
import { ApiEnums } from 'src/enums/api';

/** @function
 * @name fetchData
 * @returns { Promise<AxiosResponse<any>> }
 */
export const fetchData = (): Promise<AxiosResponse<any>> => {
    return getAxiosInstance().get(ApiEnums.FETCH_REQUEST);
};
