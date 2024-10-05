import * as XLSX from 'xlsx';

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
};

export const convertToReadableDatetime = (datetimeString) => {
  const date = new Date(datetimeString);

  // Date
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Time
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  const formattedDate = date.toLocaleDateString('id-ID', dateOptions);
  const formattedTime = date.toLocaleTimeString('id-ID', timeOptions);

  return `${formattedDate}, ${formattedTime}`;
};

export const exportToExcel = (data, filename = 'report.xlsx') => {
  // Buat worksheet dari data
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

  XLSX.writeFile(workbook, filename);
};
