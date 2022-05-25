const BASE_API_URL = 'http://localhost:3001/books';

export const fetchBooks = () => {
  const response = fetch(BASE_API_URL, {
    method: 'GET',
    body: JSON.stringify(),
  }).then((res) => res.json());

  return response;
};

export const fetchBookId = (bookId) => {
  const response = fetch(`${BASE_API_URL}/${bookId}`, {
    method: 'GET',
    body: JSON.stringify(),
  }).then((res) => res.json());

  return response;
};
