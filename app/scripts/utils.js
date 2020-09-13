import { GET_PRODUCT_URL } from './constants/constants';

export const fetchDataMethod = params => {
  const url = params ? `${GET_PRODUCT_URL}?search=${params}` : GET_PRODUCT_URL;

  return fetch(url,{
    method:'GET'
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => data)
    .catch(error=>console.log(error));
}
