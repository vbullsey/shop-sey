export async function fetcher(url: string) {
  const res = await fetch(url);
  return res.json();
}

// const fetcher = (url, accessToken) => {
//   return axios
//       .get(url, {
//           headers: {
//               'Authorization': `Bearer ${accessToken}`,
//               'Client-Id': `${process.env.TWITCH_CLIENT_ID}`
//           }
//       })
//       .then((res) => res.data);
// }
