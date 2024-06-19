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
        // Jika menu yang sedang aktif diklik lagi, sembunyikan semua menu dan subject
        selectedMenu.classList.remove('active');
        var subjects = document.getElementsByClassName('subject');
        for (var i = 0; i < subjects.length; i++) {
            subjects[i].classList.remove('active');
        }
        activeMenuId = null; // Reset active menu
    } else {
        // Menonaktifkan semua menu
        var menus = document.getElementsByClassName('learning_menu');
        for (var i = 0; i < menus.length; i++) {
            menus[i].classList.remove('active');
        }

        // Menyembunyikan semua subject
        var subjects = document.getElementsByClassName('subject');
        for (var i = 0; i < subjects.length; i++) {
            subjects[i].classList.remove('active');
        }

        // Mengaktifkan menu yang dipilih
        selectedMenu.classList.add('active');
        activeMenuId = menuId; // Set active menu
    }
}

function showSubject(subjectId) {
    // Menyembunyikan semua subject
    var subjects = document.getElementsByClassName('subject');
    for (var i = 0; i < subjects.length; i++) {
        subjects[i].classList.remove('active');
    }

    // Menyembunyikan semua learning_menu
    var menus = document.getElementsByClassName('learning_menu');
    for (var i = 0; i < menus.length; i++) {
        menus[i].classList.remove('active');
    }

    // Menampilkan subject yang dipilih
    var selectedSubject = document.getElementById(subjectId);
    selectedSubject.classList.add('active');
    activeMenuId = null; // Reset active menu
}