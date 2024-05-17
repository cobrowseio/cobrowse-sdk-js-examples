import { format, formatRelative, isBefore, subDays } from 'date-fns'

export const formatDate = (date) => {
  return isBefore(date, subDays(new Date(), 6))
    ? format(date, "do 'at' hh:mm b")
    : formatRelative(date, new Date())
}