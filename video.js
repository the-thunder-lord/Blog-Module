var ROOT = "/sites/all/themes/bartik/";

jQuery(function($)
{

jQuery(".about").click(function(event)
{
   jQuery("#video_player *").hide();
   jQuery("#video_player #about").show();
   jQuery("#video_player #about *").show();
});

 jQuery(".contact").click(function(event)
 {
  // alert(654);
  jQuery("#video_player *").hide();
  jQuery("#video_player #contact_form").show();
  jQuery("#video_player #contact_form *").show();
  jQuery("#video_player").css("background-color","white").css("opacity",".9");
 });
  jQuery("input[name='submit_contact']").click(function(e){
    e.preventDefault();
    var first_name=jQuery("input[name='first_name']");
    var last_name=jQuery("input[name='last_name']");
    var email=jQuery("input[name='email']");
    var telephone=jQuery("input[name='telephone']");
    var comments=jQuery("textarea[name='comments']");
    jQuery.post("html_form_send.php",{first_name:first_name.val(),last_name:last_name.val(),email:email.val(),telephone:telephone.val(),comments:comments.val()},function(data){
     if(data=="sent")
       {
          first_name.val("");last_name.val("");email.val("");telephone.val("");comments.val("");
          jQuery("#video_player .failure").hide();
          jQuery("#video_player .success").show();
       }
     else {
       jQuery("#video_player .success").hide();
       jQuery("#video_player .failure").show();
     }
    });
 });

jQuery("#drop_menu .esri .esri_2014").click(function() {
  jQuery("#video_box").css('background','url("/sites/all/themes/bartik/images/ESRI.png") no-repeat center white');
  jQuery("#summary").html("<h2>ESRI User Conference 2014</h2>");
  jQuery("#playlist").css("background-color", "rgba(0, 0, 0, .8)");
  jQuery("#playlist").load(ROOT + "playlist.php");
  jQuery("#advert").html("<h1>ESRI Advertising Here</h1>");
  jQuery("#client_logo").css('background','url("/sites/all/themes/bartik/images/esri_logo.png") no-repeat');
});

jQuery("#drop_menu .blackhat").click(function() {
  jQuery("#video_box").css('background','url("/sites/all/themes/bartik/images/blackhat.png") no-repeat center black');
  jQuery("#summary").html("<h2>Blackhat Conference 2014</h2>");
  jQuery("#advert").html("<h1>Blackhat Advertising Here</h1>").css("text-align","center");
  jQuery("#client_logo").css('background','url("/sites/all/themes/bartik/images/blackhat_logo.png") no-repeat');
});

jQuery("#drop_menu .defcon").click(function() {
  jQuery("#video_box").css('background','url("/sites/all/themes/bartik/images/defcon.png") no-repeat left');
  jQuery("#summary").html("<h2>Def Con 2014</h2>");
  jQuery("#advert").html("<h1>Defcon Advertising Here</h1>");
  jQuery("#client_logo").css('background','url("/sites/all/themes/bartik/images/defcon_logo.png") no-repeat')
});

jQuery("#drop_menu .home").hover(function() {
  jQuery("#summary").html("<h2>Visit our homepage</h2>");

},function() {
  jQuery("#summary").html("<h2>Welcome to The Source of Knowledge! Choose a conference from the drop down menu to begin.</h2>");
 });

jQuery("#drop_menu .about").hover(function() {
   jQuery("#summary").html("<h2>Learn more about who we are</h2>");

},function() {
   jQuery("#summary").html("<h2>Welcome to The Source of Knowledge! Choose a conference from the drop down menu to begin.</h2>");
});

jQuery("#drop_menu .conferences").hover(function() {
   jQuery("#summary").html("<h2>Choose your conference below</h2>");

},function() {
   jQuery("#summary").html("<h2>Welcome to The Source of Knowledge! Choose a conference from the drop down menu to begin.</h2>");
});

jQuery("#drop_menu .ia").hover(function() {
   jQuery("#summary").html("<h2>Visit our new security site, Intrisic Alchemy!</h2>");

},function() {
   jQuery("#summary").html("<h2>Welcome to The Source of Knowledge! Choose a conference from the drop down menu to begin.</h2>");
});

jQuery("#drop_menu .contact").hover(function() {
   jQuery("#summary").html("<h2>Need to reach us? Contact us here.</h2>");

},function() {
   jQuery("#summary").html("<h2>Welcome to The Source of Knowledge! Choose a conference from the drop down menu to begin.</h2>");
});

jQuery("#drop_menu .esri").hover(function() {
   jQuery("#summary").html("<h2>Videos from ESRI conference</h2>");

},function() {
   jQuery("#summary").html("<h2>Welcome to The Source of Knowledge! Choose a conference from the drop down menu to begin.</h2>");
});

jQuery("#drop_menu .blackhat").hover(function() {
   jQuery("#summary").html("<h2>Videos from Black Hat conference</h2>");

},function() {
   jQuery("#summary").html("<h2>Welcome to The Source of Knowledge! Choose a conference from the drop down menu to begin.</h2>");
});

jQuery("#drop_menu .defcon").hover(function() {
   jQuery("#summary").html("<h2>Videos from Def Con conference</h2>");

},function() {
   jQuery("#summary").html("<h2>Welcome to The Source of Knowledge! Choose a conference from the drop down menu to begin.</h2>");
});

jQuery(document).on("click", "#playlist h2",  function() {
  jQuery(this).next(".col1").toggle(300);
  jQuery("#playlist").scrollTop(jQuery("#playlist").scrollTop()
   + jQuery(this).position().top);
});

jQuery(document).on("click", "#playlist a", function(e) {
  var query = jQuery(this).attr("href");
  var session = query.substring(query.indexOf("session")+7);
  jQuery("#summary").html(jQuery("#" + session).html());
  jQuery("#video_player *").hide();
  jQuery("#video_player #video").show();
  jQuery("#video_player").css("background-color", "rgba(0, 0, 0, .7)");
  jQuery.get(ROOT + "video.php", { query : query.replace("#", "") }, function(data) {
    jQuery("#video_player #video").html(data);
    jQuery("#video_player video").load();
  });
});

});
