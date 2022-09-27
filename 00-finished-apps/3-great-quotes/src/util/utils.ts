const compare = (a: any, b: any) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

// NOTE Utility function to sort an array of objects by a given property
const sortList = <T>(list: T[], prop: keyof T, ascending = true): T[] => {
  if (!list?.length) return list;

  return list.sort((a, b) =>
    ascending ? compare(a[prop], b[prop]) : compare(b[prop], a[prop])
  );
};

export { sortList };
