

const curses = [
    {
     title: `<h1>Asincronismo js</h1>`,
     img: `<img src="./img/asincronismo js.JPG" alt="">`
    },
    {
     title: ` <h1>Basico js</h1>`,
     img: `<img src="./img/basico js.JPG" alt="">`
    },
    {
     title: `<h1>Ecmas 6</h1>`,
     img: `<img src="./img/ecmas 6.JPG" alt="">`
    },
    {
     title: `<h1>Frontend develop</h1>`,
     img: `<img src="./img/frontend develop.JPG" alt="">`
    },
    {
     title: `<h1>Fundamentos js</h1>`,
     img: `<img src="./img/fundamentos js.JPG" alt="">`
    },
    {
     title: `<h1>Html Css</h1>`,
     img: `<img src="./img/html css.JPG" alt="">`
    },
    {
     title: `<h1>Mobile first</h1>`,
     img: ` <img src="./img/mobile first.JPG" alt="">`
    },
    {
     title: `<h1>Prework windows</h1>`,
     img: `<img src="./img/prework windows.JPG" alt="">`
    },
    {
     title: `<h1>Prework</h1>`,
     img: `<img src="./img/prework.JPG" alt="">`
    },
    {
     title: `<h1>Programacion basica</h1>`,
     img: `<img src="./img/programacion basica.JPG" alt="">`
    },
    {
     title: `<h1>Responsive design</h1>`,
     img: `<img src="./img/responsive design.JPG" alt="">`
    },
]

curses.forEach(curse => {
    console.log(curse);
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `${curse.title}${curse.img}`;
});