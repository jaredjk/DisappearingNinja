$(document).ready(function(){
    $('img').click(function(){
        $(this).hide(function(){
        });
    });
    $('#show').click(function(){
        $( "img" ).show("slow",function(){  
        });
    });

    // $( "div" ).data( "test", { first: 16, last: "pizza!" } );
    // $( "span:first" ).text( $( "div" ).data( "test" ).first );
    // $( "span:last" ).text( $( "div" ).data( "test" ).last );
  

});

