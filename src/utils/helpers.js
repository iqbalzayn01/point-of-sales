export const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
};

export const convertToReadableDatetime = (datetimeString) => {
  const date = new Date(datetimeString);

  // Tanggal
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Waktu
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  // Format tanggal dan waktu secara terpisah
  const formattedDate = date.toLocaleDateString('id-ID', dateOptions);
  const formattedTime = date.toLocaleTimeString('id-ID', timeOptions);

  return `${formattedDate}, ${formattedTime}`;
};
