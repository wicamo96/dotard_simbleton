import { getBusinesses } from "./database.js";


const businesses = getBusinesses();


const content = document.querySelector("#content");


export const handleNYBusiness = () => {


    content.innerHTML += `<h2>NY Based Businesses</h2>`;


    let inNY = businesses.filter(business => business.addressStateCode === 'NY')
    inNY.forEach(business => {
        content.innerHTML += `
        <section class='businessInfo'>
            <h3>${business.companyName}</h3>
            <div>${business.addressFullStreet}</div>
            <div>${business.addressCity}, ${business.addressZipCode} ${business.addressStateCode}</div>
        </section>`
    });
}


// const manufacturing = ()
