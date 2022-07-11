const planning = document.getElementById("planning");
const events = document.getElementById("events");
const divInter = document.getElementsByClassName("interDiv");
const interventions = [
    "intervention 1",
    "intervention 2",
    "intervention 3",
    "intervention 4",
    "intervention 5",
    "intervention 6",
    "intervention 7",
    "intervention 8",
    "intervention 9",
    "intervention 10",
    "intervention 11",
    "intervention 12",
];
const employee = ["Michel", "Julien", "Alexandre", "Bernard", "Anthony"];

const planningTable = `<table class="agents"> 
<thead>
<tr>
<th id="agents" class="titleAllAgents" onclick="sortAgentsByName()">Agents</th>
<th id="title">Lundi</th>
<th id="title">Mardi</th>
<th id="title">Mercredi</th>
<th id="title">Jeudi</th>
<th id="title">Vendredi</th>
</tr >
</thead>
<tbody>
</div>
</tbody>
</table>`;

const eventsDiv = `  <div class="interDiv">
</div>`;

let interventionOnDrag = null;

function displayPlanningAndIntervention() {
    planning.innerHTML = planningTable;
    events.innerHTML = eventsDiv;
}
displayPlanningAndIntervention();

function dragDrop() {
    const draggables = document.getElementsByClassName("box-inter");
    let elements = Array.from(draggables)
        .map((el, i) => {
            if (i === interventionOnDrag) {
                interventions.splice(i, 1);
                initIntervention();
                return el.innerHTML;
            }
        })
        .join(" ");
    this.className += " dropped";
    this.append(elements);
    console.log("elements", elements);
}

function onDrag(i) {
    interventionOnDrag = i;
}

function initAgent() {
    const divAgents = document.getElementsByClassName("insertAgents");
    const agentTable = document.getElementsByTagName("tbody");
    agentTable[0].innerHTML = employee
        .map((agent, i) => {
            return `
            <tr>
            <td id="titleAgent" data-agent="${i}" class="agent">${agent}</td>
            <td id="cellOneFirstAgent" class ="cell"></td>
            <td id="cellTwoFirstAgent" class ="cell"></td>
            <td id="cellThreeFirstAgent" class ="cell"></td>
            <td id="cellFourFirstAgent" class ="cell"></td>
            <td id="cellFiveFirstAgent" class ="cell"></td>
            </tr>`;
        })
        .join("");
}

initAgent();

function initIntervention() {
    divInter[0].innerHTML = interventions
        .map((intervention, i) => {
            return `<div class="box-inter" data-intervention="${i}" draggable="true" ondragstart=onDrag(${i})>${intervention}</div>`;
        })
        .join("");
}
initIntervention();

function onDrop() {
    const containers = document.querySelectorAll(".cell");

    for (const container of containers) {
        container.addEventListener("dragover", (e) => e.preventDefault());
        container.addEventListener("dragenter", (e) => e.preventDefault());
        container.addEventListener("dragleave", (e) => e.preventDefault());
        container.addEventListener("drop", dragDrop, (e) => e.preventDefault());
    }
}
onDrop();

function sortAgentsByName() {
    let agents = document.querySelectorAll(".agent");
    console.log("hello lala", employee);
    employee.sort();
    console.log('end', employee);
    initAgent()
}

