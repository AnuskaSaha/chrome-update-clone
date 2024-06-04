let btn = document.getElementById('btn');
let view = true;
let cards = document.querySelector('.cards-coll').children;
// console.log(cards);
cards = Array.from(cards);
cards = cards.slice(3, cards.length);
cards = cards.map((ele)=>{
    return ele;
});
// console.log(cards);
cards.forEach(card => {
    card.style.display = 'none';
});

btn.addEventListener('click', ()=>{
    if(view===true){
        console.log('open');
        btn.innerText = 'View Less';
        view = false;
        cards.forEach(card => {
            card.style.display = 'block';
            console.log(card);
        });
    }
    else{
        console.log('close');
        btn.innerText = 'View More';
        view = true;
        cards.forEach(card => {
            card.style.display = 'none';
        });
    }
});