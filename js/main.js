/*Alert while Reserve Button is offline */

document.querySelector('#reserveButton').addEventListener('click', buttonError)

function buttonError(){
  alert('Our reservation tool is down at the moment. Please contact us via email or phone to make an appointment!')
}




/* Logo + Text Toggle Function */

function hover(element, childElement, className){
    element.addEventListener('mouseenter', e => childElement.classList.remove(className))
    element.addEventListener('mouseleave', e => childElement.classList.add(className))
  }

  /* Grid Hovers */

hover(document.querySelector('#hover1'), document.querySelector('#descr1'), "fade")

hover(document.querySelector('#hover2'), document.querySelector('#descr2'), "fade")

hover(document.querySelector('#hover3'), document.querySelector('#descr3'), "fade")

hover(document.querySelector('#hover4'), document.querySelector('#descr4'), "fade")

hover(document.querySelector('#hover5'), document.querySelector('#descr5'), "fade")

hover(document.querySelector('#hover6'), document.querySelector('#descr6'), "fade")

hover(document.querySelector('#hover7'), document.querySelector('#descr7'), "fade")

hover(document.querySelector('#hover8'), document.querySelector('#descr8'), "fade")

hover(document.querySelector('#hover9'), document.querySelector('#descr9'), "fade")


/* Map */

