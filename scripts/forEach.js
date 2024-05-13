import { getBusinesses } from "./database.js";


const businesses = getBusinesses();


const content = document.querySelector("#content");


export const handleAllBusiness = () => {


    content.innerHTML += `<h1>Active Businesses</h1>`;


    content.innerHTML += `<h2 class='slice'>All Businesses</h2>`


    businesses.forEach(business => {
        content.innerHTML += `<section class='businessInfo'>
            <h3>${business.companyName}</h3>
            <div>${business.addressFullStreet}</div>
            <div>${business.addressCity}, ${business.addressZipCode} ${business.addressStateCode}</div>
        </section>`        
    });
}
