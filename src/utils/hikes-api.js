import request from 'superagent';

const URL = '/api/hikes';

//implement a method that fetches a list of data.
//list of data is in /api/hikes
export async function getHikes() {
  const response = await request.get(URL);
  return response.body;
}

export async function getHike(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addHike(hike) {
  const response = await request
    .post(URL)
    .statusType('json')
    .send(hike);
  return response.body.id;
}

// export async function deleteHike(id) {
//   const response = await request.delete(`${URL}/${id}`);
//   return response.body;
// }

export async function updateHike(hike) {
  const response = await request
    .put(`${URL}/${hike.id}`)
    .send(hike);
  return response.body;
}