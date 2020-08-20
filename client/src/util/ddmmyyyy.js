const getDate = ( date ) => {
    return (date.getDate() + "-"+ parseInt(date.getMonth()+1) +"-"+date.getFullYear());
}

export default getDate;
