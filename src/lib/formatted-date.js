const formatDate = (dbDate) => {
  const dateObject = new Date(dbDate);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = dateObject.toLocaleString("en-US", options);

  return formattedDate;
};

export default formatDate;
