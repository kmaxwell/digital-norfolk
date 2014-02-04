var themes = {
    "default": "assets/themes/default//bootstrap.css",
    "amelia" : "assets/themes/amelia/bootstrap.css",
    "cerulean" : "assets/themes/cerulean/bootstrap.css",
    "cosmo" : "assets/themes/cosmo/bootstrap.css",
    "cyborg" : "assets/themes/cyborg/bootstrap.css",
    "flatly" : "assets/themes/flatly/bootstrap.css",
    "journal" : "assets/themes/journal/bootstrap.css",
    "maxwell" : "js/bootstrap.min.css",
    "readable" : "assets/themes/readable/bootstrap.css",
    "simplex" : "assets/themes/simplex/bootstrap.css",
    "slate" : "assets/themes/slate/bootstrap.css",
    "spacelab" : "assets/themes/spacelab/bootstrap.css",
    "united" : "assets/themes/united/bootstrap.css"
}
$(function(){
   var themesheet = $('<link href="'+themes['maxwell']+'" rel="stylesheet" />');
    themesheet.appendTo('head');
    $('.theme-link').click(function(){
       var themeurl = themes[$(this).attr('data-theme')]; 
        themesheet.attr('href',themeurl);
    });
});