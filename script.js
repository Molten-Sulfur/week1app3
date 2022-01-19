      require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "oceans"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 5,
          center: [55, 20] // longitude, latitude
        });
      });
