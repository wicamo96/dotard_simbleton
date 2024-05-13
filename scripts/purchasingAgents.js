import { getBusinesses } from "./database.js";

const businesses = getBusinesses();

const content = document.querySelector('#content');

export const handlePurchasingAgents = () => {
    const agents = businesses.map(business => {
        return business.purchasingAgent
    })

    content.innerHTML += `<h2 class='slice'>Purchasing Agents</h2>`

    console.table(agents)

    agents.forEach(agent => {
        content.innerHTML += `<section class='businessInfo'>
        <h3>${agent.nameFirst} ${agent.nameLast}</h3>
    </section>`
    });
}