let items = [];

window.addEventListener('keydown',(e)=>{
    search();
})

function addItem(title,price,description,picture) {
    const item = {
        title: title,
        price: price,
        description: description,
        picture: picture
    };
    items.push(item);
    console.log(item);
}
function search() {
    let search = document.getElementById('search').value;
    for(i=0;i<items.length;i++) {
        if(items[i].title.toLowerCase().includes(search.toLowerCase())) {
            instantiate(items[i]);
        }
    }
}
addItem('Dog',69,'A poggers doggo','dog.png');
addItem('Your mom',420,'A poggers mom','mom.png');

function instantiate(item) {
    let elem = document.createElement('p',item.title);
    document.appendChild(elem);
}

