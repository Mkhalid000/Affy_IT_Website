export const enforceMaxLength = (event) => {
    if (event.target.value.length > 10) {
      event.target.value = event.target.value.slice(0, 10);
    }
  };