export const CONCERT_QUERIES = {
  GET_ALL_CONCERTS: `
    SELECT * FROM concerts
    WHERE visible = true
    ORDER BY date DESC
  `
};