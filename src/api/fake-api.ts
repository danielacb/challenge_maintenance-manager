const url =
  "https://proxy.cors.sh/https://my-json-server.typicode.com/tractian/fake-api";

const headers = {
  "x-cors-api-key": import.meta.env.VITE_CORS_API_KEY,
};

export async function getCompanyById(id: number) {
  const res = await fetch(`${url}/companies/${id}`, { headers });
  return res.json();
}

export async function getAssetById(id: number) {
  const res = await fetch(`${url}/assets/${id}`, { headers });
  return res.json();
}

export async function getAssetsByCompanyId(id: number) {
  const res = await fetch(`${url}/companies/${id}/assets`, { headers });
  return res.json();
}

export async function getUserById(id: number) {
  const res = await fetch(`${url}/users/${id}`, { headers });
  return res.json();
}

export async function getUsersByCompanyId(id: number) {
  const res = await fetch(`${url}/companies/${id}/users`, { headers });
  return res.json();
}

export async function getUnits() {
  const res = await fetch(`${url}/units`, { headers });
  return res.json();
}

export async function getUnitsByCompanyId(id: number) {
  const res = await fetch(`${url}/companies/${id}/units`, { headers });
  return res.json();
}
