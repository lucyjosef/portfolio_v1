$(document).ready(function(){
    var htmlRender = "";
    var input = null;
    input ="";

    //launchApi();
    
    function AddToFavorite(movie, id) {
        localStorage.setItem(movie, id);
    }
    
    function destroyList() {
        //to empty the previous list
        $('.ul-no-style').remove();
    }
    
    function launchApi() {        
        //bring api content (list of movies title)
        $.ajax({
            url: "https://api.tvmaze.com/search/shows?q=" + input
        }).done(function(data) {
            htmlRender += '<ul class="ul-no-style">';
            $.each(data, function(index, value) {
                htmlRender += "<li>" + value.show.name + "</li>";
                console.log(value.show.name);
            });
            htmlRender += "</ul>";
            $('[data-item="result"]').html(htmlRender);
        });
    }
    
    function seeAllFavorite() {
        var returnFav = '<div class="parentModal"><div class="childModal"><ul class="ul-no-style">' + + '</ul>';
        for(i=0; i< localStorage.length; i++) {
            if(localStorage.key(i) != "undefined" && localStorage.key(i) != NaN){
                returnFav += '<li data-event="clickedOnFav">' + localStorage.key(i) + '</li>';
            }
        }
        returnFav += "</ul></div></div>";
        $('[data-use="modal"]').html(returnFav);
        
        $('body').on('click', '[data-event="clickedOnFav"]', function(){
            input = this.innerText;
            launchApi();
        });
    }
    
    //display details of clicked show
    $('body').on('click', '[data-item="result"] li', function(){
        var htmlRenderBis = "";
        var content = this.innerText;
        $.ajax({
            url : "https://api.tvmaze.com//search/shows?q=" + input
        }).done(function(data) {
            $.each(data, function(index, value) {
                if(content == value.show.name) {
                    //display details one by one
                    htmlRenderBis += '<div>';
                    if(value.show.image != null) {
                       if(value.show.image.original != null) {
                            htmlRenderBis += '<img src=' + value.show.image.original + '>';
                        } else if (value.show.image.medium != null) {
                            htmlRenderBis += '<img src=' + value.show.image.medium + '>';
                        }
                    } else {
                        htmlRenderBis += "<p><i>Couldn't find this movie picture...</i></p>";
                    }
                    htmlRenderBis += '<h1 id="title">' + value.show.name + "</h1>";
                    
                    //To display every genres if genres exist
                    if(value.show.genres.length > 0){
                        htmlRenderBis += "<p>Genre : ";
                        for(i=0; i < value.show.genres.length; i++) {
                            if(i == value.show.genres.length -1) {
                                htmlRenderBis += value.show.genres[i]
                            } else {
                                htmlRenderBis += value.show.genres[i] + ", ";
                            }
                        }
                        htmlRenderBis += "</p>";
                    }
                   
                    
                    htmlRenderBis += "<p>Language :" + value.show.language + "</p>";
                    if(value.show.officialSite != null) {
                        htmlRenderBis += '<p>Website :<a href="' + value.show.officialSite + '" target="_blank">' + value.show.officialSite + '</a></p>';
                    }
                    if(value.show.premiered != null) {
                        htmlRenderBis += "<p>premiered in " + value.show.premiered + "</p>";
                    }
                    if(value.show.rating.average != null) {
                        htmlRenderBis += "<p>Average rating : " + value.show.rating.average + "</p>";
                    }
                    if(value.show.summary != null && value.show.summary != "") {
                        htmlRenderBis += "<p>Summary : " + value.show.summary + "</p>";
                    }
                    
                    htmlRenderBis += "</div>";
                    htmlRenderBis += '<p class="hidden" id="id">' + value.show.id + '</p>';
                }
            });
            $('[data-use="detail"]').html(htmlRenderBis);
        });
    });
    
    //To put a movie in the favorites
    $('[data-use="fav"]').html('<i class="fa fa-star"></i><br><button data-modal="show" value="See all">My favorites</button>');
    $('body').on('click', '[data-use="fav"] i', function() {
        var movie = $('#title').html();
        var id = $('#id').html();
        AddToFavorite(movie, id);
    });
    
    //When See all fav is push
    $('body').on('click', '[data-use="fav"] button', function() {
        seeAllFavorite();
    });
    
    //To deal with user input
    $('[data-use="submit"]').on('click', function() {
        input = $('#input').val();
        //relaunch ajax query 
        launchApi();
    });
    
    $('.clearList').on('click', function() {
        destroyList();
    });
    
    $('body').on('click', '.parentModal', function() {
        this.style.display = 'none';
    });
    
});