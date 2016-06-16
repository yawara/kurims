(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52436565-1', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');


// Track Downloads & Outbound for www.kyoto-u.ac.jp
if (typeof jQuery != 'undefined') {
  jQuery(document).ready(function($) {
    var filetypes = /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav|jpe?g)$/i;
    var attached_file = /eventpdf$/i;
    var baseHref = '';
    if (jQuery('base').attr('href') != undefined) baseHref = jQuery('base').attr('href');
 
    jQuery('a').on('click', function(event) {
      var el = jQuery(this);
      var track = true;
      var href = this.href;
      var href_nofragment = this.href.split('#')[0];
      var title = (typeof(el.attr('title')) != 'undefined' ) ? el.attr('title') :"";
      var isThisDomain = href.match(location.hostname);

      if (!href.match(/^javascript:/i)) {
        var elEv = []; elEv.value=0, elEv.non_i=false;
        if (href.match(/^mailto\:/i)) {
          elEv.category = "メール";
          elEv.action = "click";
          elEv.label = href.replace(/^mailto\:/i, '');
          elEv.loc = href;
        }
        else if ( ( href_nofragment.match(filetypes) || href_nofragment.match(attached_file) )&& isThisDomain) {
          // サイト内は仮想ページビューで計測
          elPath = href.replace(/^https?\:\/\//i, '').replace(location.hostname, '');

          if (title.length > 0) {
              pagetitle = title;
          } else if (el.text().length > 0) {
              pagetitle = el.text() + " | " + document.title;
          } else {
              pagetitle = 'Untitled: ' + elPath
          }

          ga('send', 'pageview', {'title': pagetitle, 'page': elPath});
          track = false;
        }
        else if (href_nofragment.match(filetypes)) {
          var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
          elEv.category = "ダウンロード";
          elEv.action = "click-" + extension[0];
          elEv.label = href.replace(/ /g,"-");
          elEv.loc = href;
        }
        else if (href.match(/^https?\:/i) && !isThisDomain) {
          elEv.category = "外部リンク";
          elEv.action = "click";
          target_url = href.replace(/^https?\:\/\//i, '');
          
          if (title) {
              elEv.label = title.replace(/^\s+/g, '') + '<>' + target_url;
          } else if (el.text().length > 0) {
              elEv.label = el.text().replace(/^\s+/g, '') + '<>' + target_url;;
          } else {
              elEv.label = target_url;
          }

          elEv.non_i = true;
          elEv.loc = href;
        }
        else if (href.match(/^tel\:/i)) {
          elEv.category = "電話";
          elEv.action = "click";
          elEv.label = href.replace(/^tel\:/i, '');
          elEv.loc = href;
        }
        else track = false;
 
        if (track) {
          ga('send', 'event', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label.toLowerCase(), elEv.value,  {'nonInteraction': elEv.non_i});
          if ( el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank') {
            setTimeout(function() { location.href = elEv.loc; }, 400);
            return false;
          }
        }
      }
    }); // END jQuery('a').bind('click', function(event) {
  }); // END jQuery(document).ready(function($) {
} // END if (typeof jQuery != 'undefined')
