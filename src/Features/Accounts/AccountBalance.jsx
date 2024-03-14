function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
  
  function AccountBalance() {
    return <div className="balance">{formatCurrency(123456)}</div>;
  }
  
  export default AccountBalance
  