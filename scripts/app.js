const actorForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const loader = document.querySelector(".loader");
const loaderChild = document.querySelector(".loader-child");
// CITY = ACTOR
const updateUI = (data) => {

    // destructure properties
    const {
        movieID,
        ratings,
        imgLink
    } = data;

    //update details template
    details.innerHTML = `<h5 class="my-3">REVIEW: ${ratings[2]}</h5>
<div class="my-3">Release Date: ${ratings[1]}</div>
<div class="display-4 my-4">
    <span>${ratings[0]}</span>
</div>`;

    time.setAttribute('src', imgLink);

    loaderChild.classList.remove("ldio-2zln1v3is0y")
    loader.classList.remove("loadingio-spinner-spinner-jz6igfqljfa");

    //remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}
const updateActor = async (actor) => {
    const movieID = await getActor(actor);
    const ratings = await getRatings(movieID);
    const imgLink = await getImage(ratings);

    return {
        movieID,
        ratings,
        imgLink
    };
}

actorForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    if (!card.classList.contains('d-none')) {
        card.classList.add('d-none');
    }

    loader.classList.add("loadingio-spinner-spinner-jz6igfqljfa");
    loaderChild.classList.add("ldio-2zln1v3is0y");
    // get city value
    let constActor = actorForm.actor.value.trim();
    actorForm.reset();

    //update the ui with new city
    updateActor(constActor).then(data => updateUI(data))
        .catch(err => console.log(err));
})