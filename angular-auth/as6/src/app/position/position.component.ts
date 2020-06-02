import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Position } from '../data/position';
import { PositionService } from '../data/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit, OnDestroy {

  paramSubscription: any;
  positionSubscription: any;
  savePositionSubscription: any;
  position: Position;
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(
    private positionService: PositionService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe((params) => {
      this.positionSubscription = this.positionService.getPosition(params['_id']).subscribe((p) => {
        this.position = p[0];
      });
    });
  }

  onSubmit() {
    this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe((res) => {
      this.successMessage = true;
      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    }, (err) => {
      this.failMessage = true;
      setTimeout(() => {
        this.failMessage = false;
      }, 2500);
    });
  }

  ngOnDestroy() {
    if (this.paramSubscription != 'undefined')
      this.paramSubscription.unsubscribe();

    if (this.positionSubscription != 'undefined')
      this.positionSubscription.unsubscribe();

    if (this.savePositionSubscription != 'undefined')
      this.savePositionSubscription.unsubscribe();
  }

}
