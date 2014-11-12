  

      var SOCIAL_MEDIA = [
      //  ["Share on Twitter" ,"twitter_1.png" , "http://twitter.com/share?text=%23WebGL%20%23Rosetta%20viewer%20by%20@cabbibo&url=http://cabbi.bo/rosetta"],
      ]
      

  function addSocialMedia( smArray ){

      this.social = document.createElement('div');
      this.social.id = 'social';
      document.body.appendChild( this.social );

      window.titleEP  = document.createElement('a');
      window.titleEP.href = 'http://twitter.com/share?text=%23WebGL%20%23Rosetta%20viewer%20by%20@cabbibo&url=http://cabbi.bo/rosetta/';
      window.titleEP.target = '_blank';
      window.titleEP.id = 'titleEP';
      window.titleEP.innerHTML = 'Share On Twitter';


      this.social.appendChild( window.titleEP  );

      for( var i  = 0; i < smArray.length; i ++ ){

        var a = document.createElement('a');

        if( i != smArray.length -1 ){
          a.href = smArray[i][2];
         // if( i != 0 )
            a.target = '_blank';
        }else{
          a.onClick = "function(){ console.log('hello')}";
          a.id = "information"
        }


        a.innerHTML = 'twitter'

        a.style.background = 'url( icons/'+smArray[i][1]+')';
        a.style.backgroundSize = '100%';
        a.style.backgroundSize ="60px";
        a.style.backgroundPosition="center";
        a.style.backgroundRepeat="no-repeat";
        a.classList.add( 'social' );
        a.INFO_TEXT = smArray[i][0];

        this.social.appendChild( a );

      }

    }


