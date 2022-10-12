const clearCompleted = () => {
  let inCompleted = JSON.parse(localStorage.getItem('listStorage')).filter((item) => {
    if (!item.completed) {
      return item;
    }
    return null;
  });

  inCompleted = inCompleted.map((item, id) => {
    item.index = id + 1;
    return item;
  });
  localStorage.setItem('listStorage', JSON.stringify(inCompleted));
  window.location.reload();
};

export default clearCompleted;
