export const CONCERT_QUERIES = {
  GET_ALL_CONCERTS: `
    SELECT date, venue, link FROM concerts
    WHERE visible = true
    ORDER BY date_tz DESC
  `
};