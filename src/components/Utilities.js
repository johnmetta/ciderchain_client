const amountFormat = value => '$ ' + Number(value).toLocaleString();
const dateFormat = date => Date(date).toString().slice(3,10);
const capitalizeFirstLetter = word => word.charAt(0).toUpperCase() + word.slice(1);
