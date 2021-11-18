import { Component } from '@angular/core';

interface GeoObjectConstructor {
  feature: ymaps.IGeoObjectFeature;
  options: ymaps.IGeoObjectOptions;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  geoObject: GeoObjectConstructor = {
    feature: {
      geometry: {
        // The "Polyline" geometry type.
        type: 'LineString',
        // Specifying the coordinates of the vertices of the polyline.
        coordinates: [
          [55.8, 37.5],
          [55.7, 37.4],
        ],
      },
      properties: {
        // The contents of the hint.
        hintContent: "I'm a geo object",
        // The contents of the balloon.
        balloonContent: 'You can drag me',
      },
    },
    options: {
      /**
       * Setting the geo object options.
       *  Enabling drag-n-drop for the polyline.
       */
      draggable: true,
      // The line color.
      strokeColor: '#FFFF00',
      // Line width.
      strokeWidth: 5,
    },
  };

  polyline: GeoObjectConstructor = {
    feature: {
      geometry: {
        // The "Polyline" geometry type.
        type: 'LineString',
        // Specifying the coordinates of the vertices of the polyline.
        coordinates: [
          [55.8, 37.5],
          [55.8, 37.4],
          [55.7, 37.5],
          [55.7, 37.4],
        ],
      },
      properties: {
        /**
         * Describing the properties of the geo object.
         *  The contents of the balloon.
         */
        balloonContent: 'Polyline',
      },
    },
    options: {
      /**
       * Setting options for the geo object. Disabling the close button on a balloon.
       *
       */
      balloonCloseButton: false,
      // The line color.
      strokeColor: '#000000',
      // Line width.
      strokeWidth: 4,
      // The transparency coefficient.
      strokeOpacity: 0.5,
    },
  };
}
