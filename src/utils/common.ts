export const formatToPrimaryText = (text: string, textToFormat: string[]) => {
  const pattern = new RegExp(textToFormat.join('|'), 'gi');

  const result = text.replace(pattern, (res) => `<span class='text-primary'>${res}</span>`);
  return result;
};
