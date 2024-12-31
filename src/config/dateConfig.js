import moment from "moment"

export const formatToLocalDate = (date) => {
  return moment.utc(date).local().format("YYYY-MM-DD")
}
