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

const planningTable = `<table class="agents"> 
<thead>
<tr>
<th></th>
<th id="title">Lundi</th>
<th id="title">Mardi</th>
<th id="title">Mercredi</th>
<th id="title">Jeudi</th>
<th id="title">Vendredi</th>
</tr >
</thead>
<tbody>
<tr>
<td id="agents" class="agent">Agents</td>
<td id="51"></td>
<td id="52"></td>
<td id="53"></td>
<td id="54"></td>
<td id="55"></td>

</tr>
<tr>
<td id="titleAgent" class="agent">Michel D.</td>
<td id="cellOneFirstAgent" class ="cell"></td>
<td id="cellTwoFirstAgent" class ="cell"></td>
<td id="cellThreeFirstAgent" class ="cell"></td>
<td id="cellFourFirstAgent" class ="cell"></td>
<td id="cellFiveFirstAgent" class ="cell"></td>
</tr>
<tr>
<td id="titleAgent" class="agent">Jerome A.</td>

<td id="cellOneSecondAgent" class ="cell"></td>
<td id="cellTwoSecondAgent" class ="cell"></td>
<td id="cellThreeSecondAgent" class ="cell"></td>
<td id="cellFourSecondAgent" class ="cell"></td>
<td id="cellFiveSecondAgent" class ="cell"></td>
</tr>
<tr>
<td id="titleAgent" class="agent">Antoine P.</td>

<td id="cellOneThirdAgent" class ="cell"></td>
<td id="cellTwoThirdAgent" class ="cell"></td>
<td id="cellThreeThirdAgent" class ="cell"></td>
<td id="cellFourThirdAgent" class ="cell"></td>
<td id="cellFiveThirdAgent" class ="cell"></td>
</tr>
<tr>

<td id="titleAgent" class="agent">Julien R.</td>

<td id="cellOneFourthAgent" class ="cell"></td>
<td id="cellTwoFourthAgent" class ="cell"></td>
<td id="cellThreeFourthAgent" class ="cell"></td>
<td id="cellFourFourthAgent" class ="cell"></td>
<td id="cellFiveFourthAgent" class ="cell"></td>
</tr>
<tr>
<td id="titleAgent" class="agent">Anthony O.</td>
<td id="cellOneFifthAgent" class ="cell"></td>
<td id="cellTwoFifthAgent" class ="cell"></td>
<td id="cellThreeFifthAgent" class ="cell"></td>
<td id="cellFourFifthAgent" class ="cell"></td>
<td id="cellFiveFifthAgent" class ="cell"></td>
</tr>
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
    let elements = Array.from(draggables).map((el, i) => {
        if (i === interventionOnDrag) { return el.innerHTML; }

    }).join(' ');
    this.className += " dropped";
    this.append(elements);
    console.log("elements", elements);
}

function onDrag(i) {
    interventionOnDrag = i;
}

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
        container.addEventListener("drop", dragDrop);
    }
}
onDrop();
