window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        uri: 'https://open.spotify.com/intl-es/artist/0zwHd6kFgUntrDDxvbtDKa?si=AQ5NDOYMSLCffuTja10csA'
      };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };
  