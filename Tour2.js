AFRAME.registerComponent("comics", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "superman",
          title: "Superman",
          url: "./assets/thumbnails/superman.jpg",
        },
        {
          id: "flash",
          title: "Flash",
          url: "./assets/thumbnails/flash.jpg",
        },
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/thumbnails/spiderman.jpg",
        },
        {
          id: "hulk",
          title: "Hulk",
          url: "./assets/thumbnails/hulk.jpg",
        },
      ];
  
      let previousXPosition = -62;
  
      for (var item of thumbNailsRef) {
        var posX = previousXPosition + 25;
        const posY = 10;
        const posZ = -40;
        var position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;
  
        // Border Element
        var borderEl = this.createBorder(position, item.id, item);
  
        // Thumbnail Element
        var thumbnailEl = this.createThumbnail(item);
        borderEl.appendChild(thumbnailEl);
       
        // Title Text Element
        var titleEl = this.createTitle(position, item);
        borderEl.appendChild(titleEl);
        
        this.placesContainer.appendChild(borderEl);
  
      }
    },
    createBorder: function(position, id, item) {
      var element = document.createElement('a-entity');
  
      element.setAttribute('id', id);
      //element.setAttribute('geometry', {primitive: 'plane', width: 3, height: 4});
      element.setAttribute('position', position);
      //element.setAttribute('geometry', {primitive: 'box', width: 10, height: 10});
      element.setAttribute('geometry', {primitive: 'plane', width: 14, height: 18});
      element.setAttribute('material', {src: item.url, transparent: false, opacity: 1});
      element.setAttribute('visible', true);
      element.setAttribute('onenter', {});
  
      return element;
    },
    createThumbnail: function(item) {
      var element = document.createElement('a-entity');
  
     // element.setAttribute('geometry', {primitive: 'plane', width: 14, height: 18});
     // element.setAttribute('material', {src: item.url, transparent: false, opacity: 1});
     // element.setAttribute('visible', true);
  
      return element;
    },
    createTitle: function(position, item) {
      var element = document.createElement('a-entity');
  
      position.y -= 25;
  
      element.setAttribute('text', {font: 'exo2bold', align: 'center', width: 70, color: '#e65100', value: item.title});
      element.setAttribute('position', position);
      element.setAttribute('visible', true);
  
      return element;
    }
  });