import { getBusinesses } from "./database.js";

const businesses = getBusinesses();

const content = document.querySelector('#content');

export const handlePurchasingAgents = () => {
    const agentInfos = businesses.map(business => {
        return business
    })

    content.innerHTML += `<h2 class='slice'>Purchasing Agents</h2>`

    console.table(agentInfos)

    agentInfos.forEach(agent => {
        content.innerHTML += `<section class='businessInfo'>
        <h3>${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h3>
        <h4>${agent.companyName}</h4>
        <h4>${agent.phoneWork}</h4>
    </section>`
    });
}