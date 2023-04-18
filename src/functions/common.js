function truncateText(text, number = 20) {
  let truncatedText = text.slice(0, number);
  if (text.length > number) {
    truncatedText += "...";
  }
  return truncatedText;
}

export { truncateText };
