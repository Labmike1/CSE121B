/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array

let information = {
    name: "Miguel V Baylon",
    Photo:"images/Miguel.png",
    favoriteFoods: ['Hamburguers', ' Tacos',' Pasta', ' Steak'],
    hobbies: ['Play', ' Read',' Travel'],
    placesLived: [],
};


// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

information.placesLived = [
    {   
        place: "Guaymas,Sonora",
        length: "50",
    },

    {
        place: "Hermosillo,Sonora",
        length: "250",    
    },

    {
        place: "Mexico City",
        length: "15006656",    
    }
];


 
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = information.name

// Step 2: Assign the value of   photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = information.Photo 

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').alt = "My picture"

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
// document.querySelector('#favorite-foods').innerHTML = information.favoriteFoods;
const favfood = document.createElement('ul');      
information.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.innerHTML = food;
    favfood.append(li);
});
document.querySelector('#favorite-foods').append(favfood);

 
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const hobby = document.createElement('ul');      
information.hobbies.forEach(hobbie => {
    let li_2 = document.createElement('li');
    li_2.innerHTML = hobbie;
    hobby.append(li_2);
});
document.querySelector('#hobbies').append(hobby);


// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
 
const places = document.createElement('dl');
information.placesLived.forEach(place => {
    let li_3 = document.createElement('li');
    li_3.innerHTML = place.place;
    places.append(li_3);
    });
 
const lengths = document.createElement('dl')
information.placesLived.forEach(place => {
    let li_4 = document.createElement('li');
    li_4.innerHTML = place.length;
    lengths.append(li_4);
});
  

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
for(i = 0; i < information.placesLived.length; i++) {
    document.querySelector('#places-lived').append(places[i]);
    document.querySelector('#places-lived').append(lengths[i]);
    console.log(document.querySelector('#places-lived'))
    console.log(places[i])
    console.log(lengths[i])
}