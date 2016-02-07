
var API_KEY = '2d624fff40205edcdcf5155d276e9c89';

var PIETER_USER_ID = '139152471@N06';
var JOE_USER_ID = '43854009@N05';

var photoQuery = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+API_KEY+"&jsoncallback=?";
var exifQuery = "https://api.flickr.com/services/rest/?method=flickr.photos.getExif&api_key="+API_KEY+"&jsoncallback=?";

//size of photos to query for: https://www.flickr.com/services/api/misc.urls.html
var PHOTO_SIZE = 'm'; //c = medium (800px longest side), o = original

function queryFlickr(callback){
  // var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  // var flickrQuery = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+API_KEY+"&tags=flower&per_page=3&format=json";


  $.getJSON( photoQuery, {
    // tags: "gluon,winterlab",
    // tagmode: "all",
    user_id: PIETER_USER_ID,
    per_page: 3,
    format: "json"
  })
  .done(function(data){
    queryExifs(data.photos.photo, callback);
  });
}

function queryExifs(photos, cb){
  console.log('found >> '+photos.length+' << photos:');
  // console.log(photos);
  var foundPhotos = [];

  async.mapSeries(photos, getExif, function(e, results){
    // console.log('all photos array:', results);
    cb(results);
  });


  function getExif(photo, cb){
    // console.log('querying EXIF for: '+JSON.stringify(photo, null, '\t'));
    var photoId = photo.id;
    var photoData = {
      id: photoId,
      url: 'https://farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_'+PHOTO_SIZE+'.jpg'
    };

    $.getJSON( exifQuery, {
      photo_id: photoId,
      format: "json"
    })
    .done(function(thisPhoto){
      // console.log(thisPhoto.photo.exif);
      async.eachSeries(thisPhoto.photo.exif, function(data, callb){
        if(data.tag === 'GPSLatitude'){
          // console.log('GOT LATITUDE:', data.clean._content);
          photoData.lat = data.clean._content;
        } else if(data.tag === 'GPSLongitude'){
          // console.log('GOT LONGITUDE:', data.clean._content);
          photoData.lon = data.clean._content;
        } else if(data.tag === 'CreateDate'){
          // console.log('CREATEDATE:', data.raw._content);
          photoData.date = data.raw._content;
        }
        callb();
      }, function(e){
        cb(null, photoData);
      });
    });
  }
}