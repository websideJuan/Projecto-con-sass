const btnMenu = document.querySelector('button');
const menuShow = document.querySelector('#divHeight');
var divHeight


function showHeight(objId) {
    const obj = document.getElementById(objId)

    if(obj.offsetHeight) divHeight = obj.offsetHeight

    showMenu(divHeight)
}

const showMenu = (height) => {
    btnMenu.addEventListener('click', () => {
        // console.log(`el alto del menu ul es ${height}`)
        if(height) menuShow.classList.toggle('showMenu')
    })

}

showHeight('divHeight')
