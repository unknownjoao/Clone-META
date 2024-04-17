function showTab(tabId) {
    // Ocultar todas as abas
    var tabs = document.querySelectorAll('.nav-window');
    tabs.forEach(function(tab) {
      tab.style.display = 'none';
    });

    // Mostrar a aba especificada
    document.getElementById(tabId).style.display = 'block';
  }

  function hideTabs() {
    // Ocultar todas as abas
    var tabs = document.querySelectorAll('.nav-window');
    tabs.forEach(function(tab) {
      tab.style.display = 'none';
    });
  }