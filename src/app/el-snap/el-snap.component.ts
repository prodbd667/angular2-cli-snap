import { Component, OnInit } from '@angular/core';
// import * as Snap from 'snapsvg';

// import "snapsvg";
declare var Snap: any;

// import {snapTo} from 'snapsvg';


@Component({
  selector: 'app-el-snap',
  templateUrl: './el-snap.component.html',
  styleUrls: ['./el-snap.component.css']
})
export class ElSnapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(Snap);
    this.createSvg();
  }

  createSvg() {

    let svgCanvas;

    let move1 = function (dx, dy, x, y, e) {
      console.log('dx', x);
      console.log('dy', y);
      console.log('x', x);
      console.log('y', y);
      console.log('event', e);

      console.log('this', this);

      this.attr({
          cx: 100 + dx,
          cy: 150 + dy
      });

    };

    svgCanvas = Snap("#svg");


    let bigCircle = svgCanvas.circle(150, 150, 100);
    bigCircle.attr({
      fill: "#bada55",
      stroke: "#000",
      strokeWidth: 5
    });
    var smallCircle = svgCanvas.circle(100, 150, 70);
    smallCircle.drag(move1);


    // svgCanvas.click((e) => {
    //   svgCanvas
    //     .circle(e.offsetX, e.offsetY, 15)
    //     .attr({
    //       fill: "#387",
    //       stroke: "#222",
    //       strokeWidth: 5
    //     });
    // });
  }



}
