var BannerAd = React.createClass({
    onBannerClick: function(e) {
      // codez to make the moneys
      console.log(e);
      alert('Banner clicked.');
    },
  
    render: function() {
      // Render the div with an onClick prop (value is a function)
      return <div onClick={() => this.onBannerClick()}>Click Me!</div>;
    }
  });