import { Component, OnInit, OnDestroy } from '@angular/core';
import { PositionService } from '../data/position.service';
import { Position } from '../data/position';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit, OnDestroy {

  positions: Position[];
  getPositionsSub: any;
  loadingError: boolean;

  constructor(private service: PositionService) { 
    this.getPositionsSub = '';
    this.loadingError = false;
  }

  ngOnInit() {
    this.getPositionsSub = this.service.getPositions().subscribe((data) => {
      this.positions = data;
    }, (err) => {
      this.loadingError = true;
    });
  }

  ngOnDestroy() {
    this.getPositionsSub.unsubscribe();
  }

}
