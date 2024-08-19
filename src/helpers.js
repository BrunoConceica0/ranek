export default function rerialize(object) {
  let queryString = "";

  for (let key in object) {
    queryString += `&${key}=${object[key]}`;
  }
  return queryString;
}
