function formatAddress(address) {
  const addressLines = [];

  addressLines.push(address.street1);
  if (address.street2) {
    addressLines.push(address.street2);
  }
  addressLines.push(`${address.city}, ${address.state} ${address.zip}`);

  return addressLines.join('\n');
}

export default formatAddress;
