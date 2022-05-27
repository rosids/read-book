const BASE_API_URL = 'http://localhost:3001/books';

export const fetchBooks = (page) => {
  const response = fetch(`${BASE_API_URL}?page=${page}`, {
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

export const fetchDeleteBook = (bookId) => {
  const response = fetch(`${BASE_API_URL}/${bookId}`, {
    method: 'DELETE',
    body: JSON.stringify(),
  }).then((res) => res.json());

  return response;
};

export const fetchNewBook = async (
  name,
  comment,
) => {
  const response = await fetch(`${BASE_API_URL}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name,
      comment,
    }),
  }).then((res) => res.json());

  return response;
};

export const fetchUpdatedBook = async (
  bookId,
  name,
  comment,
) => {
  const response = await fetch(`${BASE_API_URL}/${bookId}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name,
      comment,
    }),
  }).then((res) => res.json());

  return response;
};
