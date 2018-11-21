// $('.popup-youtube').magnificPopup({
//   disableOn: 700,
//   type: 'iframe',
//   mainClass: 'mfp-fade',
//   removalDelay: 160,
//   preloader: false,

//   fixedContentPos: false
// });

$('.popup-youtube').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
    patterns: {
      dailymotion: {
       
        index: 'youtube.com/',
        
        // id: function(url) {        
        //     var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
        //     if (m !== null) {
        //         if(m[4] !== undefined) {
                  
        //             return m[4];
        //         }
        //         return m[2];
        //     }
        //     return null;
        // },
        
        src: 'https://youtu.be/pbL6P_z9YyY?list=RDpbL6P_z9YyY'
        
      }
    }
  }
  
  
});