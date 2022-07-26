module.exports = (sortColumn, sortDirection) => {
  return function sort(a, b) {
    const direction = sortDirection === 'ascending' ? 1 : -1;

    if (a[sortColumn] === b[sortColumn]) {
      return 0;
    }
    if (a[sortColumn] === null) {
      return 1 * direction;
    }
    if (b[sortColumn] === null) {
      return -1 * direction;
    }

    return (a[sortColumn] < b[sortColumn] ? -1 : 1) * direction;
  };
};