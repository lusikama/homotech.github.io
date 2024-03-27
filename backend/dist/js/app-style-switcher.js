$(function () {
  "use strict";
  //****************************
  /* Left header Theme Change function Start */
  //****************************
  function handlelogobg() {
    $(".theme-color .theme-item .theme-link").on("click", function () {
      var logobgskin = $(this).attr("data-logobg");
      $(".topbar .top-navbar .navbar-header").attr("data-logobg", logobgskin);
    });
  }
  handlelogobg();
  //****************************
  /* Top navbar Theme Change function Start */
  //****************************
  function handlenavbarbg() {
    if ($("#main-wrapper").attr("data-navbarbg") == "skin6") {
      // do this
      $(".topbar .navbar").addClass("navbar-light");
      $(".topbar .navbar").removeClass("navbar-dark");
    } else {
      // do that
    }
    $(".theme-color .theme-item .theme-link").on("click", function () {
      var navbarbgskin = $(this).attr("data-navbarbg");
      $("#main-wrapper").attr("data-navbarbg", navbarbgskin);
      $(".topbar").attr("data-navbarbg", navbarbgskin);
      $(".topbar .navbar-collapse").attr("data-navbarbg", navbarbgskin);
      if ($("#main-wrapper").attr("data-navbarbg") == "skin6") {
        // do this
        $(".topbar .navbar").addClass("navbar-light");
        $(".topbar .navbar").removeClass("navbar-dark");
      } else {
        // do that
        $(".topbar .navbar").removeClass("navbar-light");
        $(".topbar .navbar").addClass("navbar-dark");
      }
    });
  }

  handlenavbarbg();

  //****************************
  // ManageSidebar Type
  //****************************
  function handlesidebartype() {}
  handlesidebartype();

  //****************************
  /* Manage sidebar bg color */
  //****************************
  function handlesidebarbg() {
    $(".theme-color .theme-item .theme-link").on("click", function () {
      var sidebarbgskin = $(this).attr("data-sidebarbg");
      $(".left-sidebar").attr("data-sidebarbg", sidebarbgskin);
    });
  }
  handlesidebarbg();
  //****************************
  /* sidebar position */
  //****************************
  function handlesidebarposition() {
    $("#sidebar-position").change(function () {
      if ($(this).is(":checked")) {
        $("#main-wrapper").attr("data-sidebar-position", "fixed");
        $(".topbar .top-navbar .navbar-header").attr("data-navheader", "fixed");
      } else {
        $("#main-wrapper").attr("data-sidebar-position", "absolute");
        $(".topbar .top-navbar .navbar-header").attr(
          "data-navheader",
          "relative"
        );
      }
    });
  }
  handlesidebarposition();
  //****************************
  /* Header position */
  //****************************
  function handleheaderposition() {
    $("#header-position").change(function () {
      if ($(this).is(":checked")) {
        $("#main-wrapper").attr("data-header-position", "fixed");
      } else {
        $("#main-wrapper").attr("data-header-position", "relative");
      }
    });
  }
  handleheaderposition();
  //****************************
  /* sidebar position */
  //****************************
  function handleboxedlayout() {
    $("#boxed-layout").change(function () {
      if ($(this).is(":checked")) {
        $("#main-wrapper").attr("data-boxed-layout", "boxed");
      } else {
        $("#main-wrapper").attr("data-boxed-layout", "full");
      }
    });
  }
  handleboxedlayout();
  //****************************
  /* Header position */
  //****************************
  function handlethemeview() {
    $("#theme-view").change(function () {
      if ($(this).is(":checked")) {
        $("body").attr("data-theme", "dark");
      } else {
        $("body").attr("data-theme", "light");
      }
    });
  }
  handlethemeview();

  // custom function to set the icon moon or sun
  function setIcon(skin){
    if(skin === 'light'){
      $("#icon_skin_dark").removeClass("d-inline-block");
      $("#icon_skin_light").removeClass("d-none");
      $("#icon_skin_dark").addClass("d-none");
      $("#icon_skin_light").addClass("d-inline-block");

      $(".topbar").attr("data-navbarbg", "skin1");
      $(".topbar .navbar-collapse").attr("data-navbarbg", "skin1");
      $(".topbar .top-navbar .navbar-header").attr("data-logobg", "skin1");
      $(".left-sidebar").attr("data-sidebarbg", "skin6");
    }else{
      $("#icon_skin_dark").removeClass("d-none");
      $("#icon_skin_light").removeClass("d-inline-block");
      $("#icon_skin_light").addClass("d-none");
      $("#icon_skin_dark").addClass("d-inline-block");

      $(".topbar").attr("data-navbarbg", "skin5");
      $(".topbar .navbar-collapse").attr("data-navbarbg", "skin5");
      $(".topbar .top-navbar .navbar-header").attr("data-logobg", "skin5");
      $(".left-sidebar").attr("data-sidebarbg", "skin5");
    }
  }

  // custon function for switching skin | light - dark
  function switcherLightDarkMode()
  {
    if(cookies.get('light_dark_mode')){
      $('#switcher_mode').attr("data-skin-mode", cookies.get('light_dark_mode'));
      $("body").attr("data-theme", cookies.get('light_dark_mode'));
      setIcon(cookies.get('light_dark_mode'));
    }
    $('#switcher_mode').click(function(){
      var skin;
      console.log($('#switcher_mode').attr("data-skin-mode"));
      $('#switcher_mode').attr("data-skin-mode") === 'light' ? skin = 'dark' : skin = 'light';
      cookies.set('light_dark_mode', skin);
      $('#switcher_mode').attr("data-skin-mode", skin);
      $("body").attr("data-theme", skin);
      setIcon(skin);
    });
  }
  switcherLightDarkMode();
});
