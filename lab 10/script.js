function start() {
    const curtain = document.getElementById('curtain');
    curtain.style.transitionDuration = '1s';
    curtain.style.transform = 'translateY(-100%)';

    const lampContainer = document.createElement('div');
    lampContainer.id = 'lamp-container';
    const lamp = document.createElement('img');
    lamp.src = 'images/lamp.png';
    lamp.id = 'lamp';

    let switchTimer;

    lamp.addEventListener('mousedown', () => {
        switchTimer = setTimeout(() => {
            switchTimer = undefined;
            const toggler = document.getElementById('switch');
            if (toggler.classList.contains('on')) {
                toggler.classList.remove('on');
                toggler.style.animation = 'off 0.1s';
                lightsOff();
            } else {
                toggler.classList.add('on');
                toggler.style.animation = 'on 0.1s';
                lightsOn();
            }
        }, 200)
    })

    lamp.addEventListener('mouseup', () => {
        if (switchTimer) {
            clearTimeout(switchTimer);
        }
        const toggler = document.getElementById('switch');
        toggler.style.animation = '';
    })

    const lampTop = document.createElement('img');
    lampTop.id = 'lamp-top';
    lampTop.src = 'images/lamp-top.png';
    
    const lampSwitch = document.createElement('img');
    lampSwitch.id = 'switch';
    lampSwitch.className = 'switch';
    lampSwitch.src = 'images/lamp-switch.png';

    setTimeout(() => {
        lampContainer.appendChild(lamp);
        lampContainer.appendChild(lampTop);
        lampContainer.appendChild(lampSwitch);
        document.body.appendChild(lampContainer);
    }, 600)

    setTimeout(() => {
        curtain.remove();
    }, 1000)
}

function lightsOn() {
    const hatContainer = document.createElement('div');
    hatContainer.id = 'hat-container';
    const hat = document.createElement('img');
    hat.src = 'images/hat.png';
    hat.id = 'hat';
    hat.onclick = function () { 
        magic();
    }

    const woman = document.createElement('img');
    woman.src = 'images/2.jpg';
    woman.id = 'woman';    

    const light = document.createElement('div');
    light.id = 'light';
    document.body.appendChild(light);
    light.style.animation = 'fadein 1s';

    setTimeout(() => {
        hatContainer.appendChild(hat);
        document.body.appendChild(hatContainer);
        document.body.appendChild(woman);
    }, 100)
}

function lightsOff() {
    const itemsIds = ['bunny', 'pigeon', 'hat-container', 'woman', 'light'];
    for (let id of itemsIds) {
        const element = document.getElementById(id);
        if (element) {
            element.style.animation = 'fadeout 1s';
            setTimeout(() => {
                element.remove();
            }, 300);
        }
    }
}

function magic() {
    const hatContainer = document.getElementById('hat-container');
    let show = 'rabbit';
    let hide = 'bird';

    if (document.getElementById('rabbit') != undefined) {
        hide = 'rabbit';
        show = 'bird';
    }

    if (document.getElementById('bird') != undefined && show == 'bird') {
        return;
    }

    const hideEl = document.getElementById(hide);

    if (hideEl != undefined) {
        hideEl.style.animation = 'hide 1s';
        setTimeout(() => {
            hideEl.remove();
        }, 1000);
    }

    const animal = document.createElement('img');
    animal.src = `images/${show}.png`;
    animal.className = 'animal';
    animal.id = show;

    animal.onclick = function () {
        magic();
    };
    
    hatContainer.appendChild(animal);

    requestAnimationFrame(() => animal.style.animation = 'show 1s');
}