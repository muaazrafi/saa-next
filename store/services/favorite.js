export const create = async (favourite) => {
  const response = await fetch('/api/favourites', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(favourite)
  }).then((res) => {
    return res.json()
  });
  return response;
}

export const destroy = async (apartmentID) => {
  const response = await fetch(`/api/favourites/${apartmentID}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((res) => {
    return res.json()
  });
  return response;
}