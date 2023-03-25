const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user => {
    // Display Gender
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;

    // Display Name
    const nameTag = document.getElementById('name');
    nameTag.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;

    // Display Location
    const locationTag = document.getElementById('location');
    locationTag.innerHTML = user.results[0].location.street.number + ' ' + user.results[0].location.street.name;

    // Display Picture
    const pictureTag = document.getElementById('picture');
    pictureTag.innerHTML = user.results[0].picture.large;


    console.log(user);


}

loadUser();