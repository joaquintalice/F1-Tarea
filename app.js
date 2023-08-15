document.addEventListener('DOMContentLoaded', main);

const URL = "teams.json";
const sectionTeams = document.getElementById("teams");

function main() {
    getTeams()
}

async function getTeams() {

    const response = await fetch(URL);

    if (!response.ok) throw new Error("Male sal jeje");

    const data = await response.json();

    const { equipos } = data;

    renderizarEquipos(equipos);
}

function renderizarEquipos(equiposArray) {

    let template = "";

    for (let equipo of equiposArray) {

        const { nombre: piloto1 } = equipo.pilotos[0]
        const { nombre: piloto2 } = equipo.pilotos[1]

        template += `
            <div class="col-12 col-md-6 ">
                <div class=" d-flex-column " style="border: 1px solid black">
                    <div class="row p-4">
                        <div class="col-7 col-sm-8 col-xxl-9" >
                            <h1>${equipo.id}</h1>
                        </div>
                        <div class="col-5 col-sm-4 col-xxl-3 " >
                            <h1>${equipo.puntos} PTS</h1>
                        </div>
                    </div>
                    <hr/>
                    <div class="row p-4">
                        <div class="col-8 col-sm-8 col-xxl-10">
                            <h2>${equipo.nombre}</h2>
                        </div>
                        <div class="col-4 col-sm-4 col-xxl-2">
                            <img src="${equipo.brandLogo}" width="90px">
                        </div>
                    </div>
                    <hr/>
                    <div class="row p-4">
                        <div class="col-7 col-sm-8 col-xxl-6 ">
                            <h2>${piloto1}</h2>
                        </div>
                        <div class="col-5 col-sm-4 col-xxl-6 ">
                            <h2>${piloto2}</h2>
                        </div>
                    </div>
                    <div class="row">
                        <img class="img-fluid" src="${equipo.auto}">
                    </div>
                </div>
            </div>
        `
    }

    return sectionTeams.innerHTML = template;
}