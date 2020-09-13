import { fetchDataMethod } from '../utils';

export const getProductData = () => fetchDataMethod();
export const getFilteredProductData = searchData => fetchDataMethod(searchData);







