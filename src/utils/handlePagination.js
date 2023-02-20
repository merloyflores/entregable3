export const numbersPage = (location, RESIDENT_PERPAGE) => {
  const quantityPages = Math.ceil(
    location?.residents.length / RESIDENT_PERPAGE
  );
  const arrayPages = [];
  for (let i = 1; i <= quantityPages; i++) {
    arrayPages.push(i);
  }
  return arrayPages;
};
