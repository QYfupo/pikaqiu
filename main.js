
let demo1css = document.querySelector('.demo1css')
let demo2html = document.querySelector('.demo2html')
let n = 0
let string = `
<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.nose {
    position: relative;
    width: 20px;
    height: 20px;
    top: 125px;
    border-radius: 100px;
    background-color: black;
    display: flex;
    left: 50%;
    transform: translateX(-10px);
    z-index: 7;
}

.sx1 {
    position: absolute;
    width: 21px;
    height: 21px;
    transform: rotate(-115deg);
    clip: rect(0px, 10px, 20px, 0px);
    border-radius: 100px;
    background-color: rgb(255, 224, 0);
}

.sx2 {
    position: absolute;
    width: 21px;
    height: 21px;
    transform: rotate(-70deg);
    clip: rect(0px, 10px, 20px, 0px);
    border-radius: 100px;
    background-color: rgb(255, 224, 0);
}
.eyes {
    border: 2px solid black;
    width: 50px;
    height: 50px;
    position: relative;
    left: 50%;
    border-radius: 50%;
    top: 100px;
    background-color: #2e2e2e;
    z-index: 9;
}
.eyes-right {
    position: absolute;
    transform: translateX(70px);
}

.eyes-left {
    position: absolute;
    transform: translateX(-120px);

}

.eleft {
    border: 2px solid black;
    width: 28px;
    height: 28px;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    left: 4px;
}

.eright {
    border: 2px solid black;
    width: 28px;
    height: 28px;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    left: 4px;
}



.mouth {
    width: 180px;
    height: 180px;
    /* border: 1px solid red; */
    position: relative;
    left: 50%;
    transform: translate(-90px);
    top: 100px;
}

.mouth-top {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    transform: translate(-100px);
    top: 25px;
    z-index: 3;
}
.mleft {
    width: 100px;
    height: 26px;
    border: 3px solid black;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 80px 40px;
    transform: rotateZ(-23deg);
    background: #ffe000;
    position: absolute;

}

.mright {
    width: 100px;
    height: 26px;
    border: 3px solid black;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 80px 40px;
    transform: rotateZ(23deg);
    background: #ffe000;
    position: absolute;
    left: 100px;
}

.mouth-down {
    width: 200px;
    height: 200px;
    position: relative;
    left: 50%;
    transform: translate(-100px);
    z-index: -1;
    overflow: hidden;

}

.mli {
    width: 150px;
    height: 700px;
    border: 3px solid black;
    border-radius: 75px/300px;
    position: absolute;
    left: 50%;
    transform: translate(-75px);
    background-color: #9f000a;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
}

.mwai {
    width: 200px;
    height: 300px;
    border: 1px solid red;
    position: absolute;
    left: 50%;
    transform: translate(-100px);
    background-color: #ff444f;
    border-radius: 100px;
    bottom: -150px;
}

.squre {
    position: absolute;
    width: 150px;
    height: 31.5px;
    left: 50%;
    transform: translate(-75px);
    background-color: #ffe000;
}

.face-left {
    border: 2px solid black;
    width: 60px;
    height: 60px;
    position: relative;
    left: 50%;
    border-radius: 50%;
    top: 160px;
    background-color: #ff0000;
    position: absolute;
    transform: translateX(-230px);
}

.face-right {
    border: 2px solid black;
    width: 60px;
    height: 60px;
    position: relative;
    left: 50%;
    transform: translateX(170px);
    border-radius: 50%;
    top: 160px;
    background-color: #ff0000;
    position: absolute;

}
@media (max-width:800px) {
    .face-left {
        width:60px;
        height: 60px;
        transform: translateX(-160px);
    }
    .face-right {
        width:60px;
        height: 60px;
        transform: translateX(100px);
    
    }
}
</style>
`
let textfn = () => {
    let 定时器序号 = setInterval(() => { // 调用这个函数，会生成一个定时器，并且返回他的序号
        if (n < string.length) {
            demo1css.innerText = string.substring(0, n)
            demo2html.innerHTML = string.substring(0, n)
            demo1css.scrollTop = demo1css.scrollHeight
            n++;
        }
    }, time)
    return 定时器序号
}
let time = 100
let 定时器序号 = textfn()
suspend.onclick = () => {
    window.clearInterval(定时器序号)
}
play.onclick = () => {
    定时器序号 = textfn()
}
normal.onclick = () => {
    time = 200
    window.clearInterval(定时器序号)
    定时器序号 = textfn()
}
fast.onclick = () => {
    time = 50
    window.clearInterval(定时器序号)
    定时器序号 = textfn()
}
faster.onclick = () => {
    time = 0
    window.clearInterval(定时器序号)
    定时器序号 = textfn()
}