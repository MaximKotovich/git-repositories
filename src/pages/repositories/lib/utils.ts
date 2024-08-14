export const calculatePageCount = (perPage: number, totalElements: number): number => {
  return Math.ceil(totalElements / perPage)
}
