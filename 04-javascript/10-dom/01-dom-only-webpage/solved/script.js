// * You will need to use methods and properties like `.createElement()`, `.innerHTML`, and `.appendChild()`

// * Your website should have two sibling `<div>` elements in the `<body>`


// * The first "div" should have two children elements, an `<h1>` and a `<p>` element. The "h1" should be a heading for your page, the "p" should be a brief description of what your page is about.

// Step 1: create element
let firstDiv = document.createElement("div");

// Step 2: Content for the firstDiv
    // Step 1: create an element
    let h1 = document.createElement("h1");
    // step 2: give it content
    h1.innerHTML = "My Favorite Foods";
    // Step 3: append the element to the parent
    firstDiv.appendChild(h1);

    let p  = document.createElement("p");
    p.innerHTML = "This is a webpage dedicated to my favorite foods, which range from elegant to absolute trash, and I love them equally.";
    firstDiv.appendChild(p);

// Step 3: append element to parent
document.body.appendChild(firstDiv);


// * The second "div" should also have two children elements, an `<img>` and a `<ul>` element. The "img" should be something related to your page. The "ul" should contain 4-5 children `<li>` elements about your page. You should use a loop for the "li" elements to prevent you from having to hardcode each item. This means you will need to create an array of what you want your "li" to be, so you can loop through it.
let secondDiv = document.createElement("div");

    let img = document.createElement("img");
    img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.l3I11dg-hs4MY8A0x-977QHaFy%26pid%3DApi&f=1";
    secondDiv.appendChild(img);

    let ul = document.createElement("ul");
    let favoriteFoods = ["Cup of Noodles", "Sushi", "Uncrustables", "Steak", "Oreos"];

        // we have to create all of the li elements for our ul
        for (let i = 0; i < favoriteFoods.length; i++) {
            const currentFood = favoriteFoods[i];
            let li = document.createElement("li");
            li.innerHTML = currentFood;
            ul.appendChild(li);
            
        }
    secondDiv.appendChild(ul);

document.body.appendChild(secondDiv);

