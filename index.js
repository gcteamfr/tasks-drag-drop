const agents = [
    {
        name: "Mario",
        interventionsBooked: [],
    },
    {
        name: "Hamidou",
        interventionsBooked: [],
    },
    {
        name: "Naïm",
        interventionsBooked: [],
    },
];

const interventions = [
    {
        id: 0,
        title: "Intervention 1",
        status: "running",
    },
    {
        id: 1,

        title: "Intervention 2",
        status: "pending",
    },
    {
        id: 2,

        title: "Intervention 3",
        status: "closed",
    },
    {
        id: 3,

        title: "Intervention 4",
        status: "running",
    },
    {
        id: 4,

        title: "Intervention 5",
        status: "running",
    },
    {
        id: 5,

        title: "Intervention 6",
        status: "pending",
    },
    {
        id: 6,

        title: "Intervention 7",
        status: "pending",
    },
    {
        id: 7,

        title: "Intervention 8",
        status: "closed",
    }
];

let indexInterventionDragged = null;

function onInit() {
    displayAllInterventions(interventions);
    displayAllAgents(agents);
    initDroppableCells();
}
onInit();

function displayAllInterventions(interventions) {
    interventions.map((intervention) => {
        const status = getInterventionStyleByStatus(intervention.status);
        document.getElementsByClassName(
            "box-interventions"
        )[0].innerHTML += `<div class="box-intervention ${status}" draggable="true" data-intervention=${intervention.id} >
          <span class="intervention-title">${intervention.title}</span>
          <span class="intervention-status">${intervention.status}</span>
        </div>`;
    });
}
// displayAllInterventions();

function displayAllAgents(agents) {
    agents.map((agent, index) => {
        document.getElementsByTagName(
            "tbody"
        )[0].innerHTML += `<tr class="row"></tr>`;
        document.getElementsByClassName("row")[
            index
        ].innerHTML += `<td class="tbody-cell tbody-cell--agent-name">${agent.name}</td>
      <td class="tbody-cell tbody-cell-dropable"></td>
      <td class="tbody-cell tbody-cell-dropable"></td>
      <td class="tbody-cell tbody-cell-dropable"></td>
      <td class="tbody-cell tbody-cell-dropable"></td>
      <td class="tbody-cell tbody-cell-dropable"></td>
      `;
    });
}
// displayAllAgents();

function getInterventionStyleByStatus(interventionStatus) {
    switch (interventionStatus) {
        case "pending":
            return "box-intervention--pending";
        case "running":
            return "box-intervention--running";
        case "closed":
            return "box-intervention--closed";
        default:
            break;
    }
}

function initDroppableCells() {
    const cells = document.querySelectorAll(".tbody-cell-dropable");
    for (const cell of cells) {
        cell.addEventListener("dragover", (e) => e.preventDefault());
        cell.addEventListener("dragenter", (e) => e.preventDefault());
        cell.addEventListener("dragleave", (e) => e.preventDefault());
        cell.addEventListener("drop", (e) => interventionOnDrop(e));
    }
}
initDroppableCells()

function interventionOnDrop(e) {
    const interventionsDraggables = document.getElementsByClassName(
        "box-intervention"
    );
    let interventionDropped = null;
    Array.from(interventionsDraggables)
        .map((interventionDraggable, index) => {
            if (
                interventionDraggable.getAttribute("data-intervention") ==
                indexInterventionDragged
            ) {
                interventions.splice(index, 1);
                interventionDraggable.classList.add("box-intervention--dropped");
                interventionDropped = interventionDraggable;
                e.path[0].appendChild(interventionDropped);
                console.log(interventionDraggable);
                console.log(interventionDraggable.getAttribute("data-intervention"));

                // console.log(e.path[0]);
            }
        })
        .join(" ");
}

Array.from(document.getElementsByClassName("box-intervention")).map(
    (intervention, index) => {
        intervention.addEventListener("dragstart", () => {
            indexInterventionDragged = index;
        });
    }
);

function sortAgentsByName() {
    agents.sort(function (a, b) {
        console.log({ agents });
        return a.name.localeCompare(b.name);
    });
    initDroppableCells();
    displayAllAgents();
}

sortAgentsByName();