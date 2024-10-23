function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex' 
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' 
}

var activeMenuId = null;

function showMenu(menuId) {
    var selectedMenu = document.getElementById(menuId);
    
    if (activeMenuId === menuId) {
        // kalo jenjang pendidikan diklik lagi, bakal nyembunyiin tampilan mata pelajaran
        selectedMenu.classList.remove('active');
        var subjects = document.getElementsByClassName('subject');
        for (var i = 0; i < subjects.length; i++) {
            subjects[i].classList.remove('active');
        }
        activeMenuId = null; // reset menu
    } else {
        // buat nonaktifin menu
        var menus = document.getElementsByClassName('learning_menu');
        for (var i = 0; i < menus.length; i++) {
            menus[i].classList.remove('active');
        }

        // menyembunyikan mata pelajaran
        var subjects = document.getElementsByClassName('subject');
        for (var i = 0; i < subjects.length; i++) {
            subjects[i].classList.remove('active');
        }

        // aktifin menu yang dipilih
        selectedMenu.classList.add('active');
        activeMenuId = menuId; // set active menu
    }
}

function showSubject(subjectId) {
    // menyembunyikan semua mata pelajaran
    var subjects = document.getElementsByClassName('subject');
    for (var i = 0; i < subjects.length; i++) {
        subjects[i].classList.remove('active');
    }

    // menyembunyikan semua learning_menu
    var menus = document.getElementsByClassName('learning_menu');
    for (var i = 0; i < menus.length; i++) {
        menus[i].classList.remove('active');
    }

    // menampilkan mata pelajaran yang dipilih
    var selectedSubject = document.getElementById(subjectId);
    selectedSubject.classList.add('active');
    activeMenuId = null; // reset menu
}