/* Formatting date into desired format */
export const dateFormatter = (date: string) => {
  const toFormatDate = new Date(date)
  const year = toFormatDate.getFullYear()
  const monthName = toFormatDate.getMonth()
  const day = ("0" + toFormatDate.getDate()).slice(-2)
  const formattedDate = day + "-" + monthName + "-" + year
  return formattedDate
}