export default function travel(r, zipcode) {
  
    if (zipcode === '') {
      return ':/';
    }
    
    return r.split(',')
      .filter(address => RegExp(`${zipcode}$`).test(address))
      .reduce((groupedAddresses, address, index, filteredAddresses) => {
          let houseNumber = address.match(/^\d+/)[0];
          let streetAndTown = address.match(RegExp(`(${houseNumber} )(.+)( ${zipcode})`))[2];
          if (index !== (filteredAddresses.length - 1)) {
            houseNumber = houseNumber + ',';
            streetAndTown = streetAndTown + ',';
          }
          
          let splitGroupedAddresses =  groupedAddresses.split(/:|\//);
          
         return `${splitGroupedAddresses[0]}:${splitGroupedAddresses[1]}${streetAndTown}/${splitGroupedAddresses[splitGroupedAddresses.length - 1]}${houseNumber}`;
          
          
    }, `${zipcode}:/`);
};