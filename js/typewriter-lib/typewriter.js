var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
     loop: true,
     delay: 25,
     deleteSpeed: 10,
});

typewriter
     .pauseFor(1500)
     .changeDeleteSpeed(5)
     .typeString('❞ برنامه نویس و توسعه دهنده فرانت اند ❝')
     .pauseFor(800)
     .deleteAll()
     .typeString('❞ مسلط به 20 کتابخانه JS ❝')
     .pauseFor(1000)
     .deleteChars(17)
     .typeString('<strong> قوائد فرانت اند ❝ </strong>')
     .pauseFor(600)
     .start();