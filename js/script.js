const cards =document.querySelectorAll('.flipA, .flipB, .flipC');
cards.forEach(card=>{
    card.addEventListener('click',()=>{
        card.classList.toggle('virado');
    })
})
//aqui nesse espaço vou fazer as variaveis
//agora mesmo vou fazer o comando do saiba mais
function enviarzapa(){
    const zap=5567991862667
    const msg="Olá, gostaria de mais informações sobre o plano presença!"
    const url=`https://wa.me/${zap}?text=${encodeURIComponent(msg)}`;
    window.open(url,"_blank");
}
function enviarzapb(){
    const zap=5567991862667
    const msg="Olá, gostaria de mais informações sobre o plano crescimento!"
    const url='https://wa.me/${zap}?text=${encodeURIComponent(msg)}';
    window.open(url,"_blank");
}
function enviarzapc(){
    const zap=5567991862667
    const msg="Olá, gostaria de mais informações sobre o plano posicionamento!"
    const url='https://wa.me/${zap}?text=${encodeURIComponent(msg)}';
    window.open(url,"_blank");
}
