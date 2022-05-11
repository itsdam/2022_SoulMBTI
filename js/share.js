const url = 'https://soulmbtiwithartists.netlify.app/';

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '소울메이트 예술가 테스트 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}

function shareNaver() {
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  var title = '소울메이트 예술가 테스트 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';
  var shareUrl = "https://share.naver.com/web/shareView?url=" + shareURL + "&title=" + title;
  document.location = shareUrl;
}

function shareFacebook() {
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareURL = url + 'page/result-' + resultAlt + '.html';
  var facebook_url = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url) + 'page/result-' + resultAlt + '.html';
  window.open(facebook_url, "", "width=486, height=286");
}

function shareTwitter() {
  var snsTitle = "소울메이트 예술가 테스트 결과";
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';
  var twitter_url = "http://twitter.com/share?url="+encodeURIComponent(url) + 'page/result-' + resultAlt + '.html'+ "&text="+encodeURIComponent(snsTitle);
    window.open(twitter_url, "tweetPop", "width=486, height=286,scrollbars=yes");
}

function shareBand() {
  var snsTitle = "소울메이트 예술가 테스트 결과";
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';
  var band_url = "http://www.band.us/plugin/share?body="+encodeURIComponent(snsTitle)+"&route="+encodeURIComponent(shareURL);
  window.open(band_url, "shareBand", "width=400, height=500, resizable=yes");
}
