export default function getQuery(filter = "", sort = "-timestamp", page = 1) {
  let query;

  if (filter) {
    query = `${filter}&sort=${sort}&page=${page}`;
  } else {
    query = `sort=${sort}&page=${page}`;
  }

  return query;
}
