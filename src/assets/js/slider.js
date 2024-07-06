(function(){
  const sliders = [...document.querySelectorAll('.team_contenido')];
  console.log(sliders)
  const buttonNext = document.querySelector('#next');
  const buttonBefore = document.querySelector('#before');

  let value;

  buttonNext.addEventListener('click', ()=>{
      changePosition(1);
  });
  buttonBefore.addEventListener('click', ()=>{
      changePosition(-1);
  });

  const changePosition = (add)=>{
      const currentTeam = document.querySelector('.team_contenido--show').dataset.id;
      value = Number(currentTeam);
      value+= add;

      sliders[Number(currentTeam)-1].classList.remove('team_contenido--show');
      if(value === sliders.length+1 || value === 0){
          value = value === 0 ? sliders.length : 1;
          // condicion ? param1 : param2
      }
      // console.log(value)

      sliders[value-1].classList.add('team_contenido--show');
  }
})();
