export const addItemToCart = (cart, item) => {
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    return cart.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            qty: cartItem.qty + item.qty,
            total: (cartItem.qty + item.qty) * cartItem.product_price,
          }
        : cartItem
    );
  }

  return [...cart, { ...item, total: item.qty * item.product_price }];
};

export const removeItemFromCart = (cart, itemId) => {
  return cart.filter((cartItem) => cartItem.id !== itemId);
};

export const calculateSubTotal = (cart) => {
  return cart.reduce((total, item) => total + item.total, 0);
};

export const saveLocalStorage = (cart) => {
  const report = {
    id: Date.now(),
    report_datetime: new Date().toISOString(),
    report_subtotal: calculateSubTotal(cart),
  };
  const reports = JSON.parse(localStorage.getItem('transactions')) || [];

  reports.push(report);
  localStorage.setItem('transactions', JSON.stringify(reports));
};
