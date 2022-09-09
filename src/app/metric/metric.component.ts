import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricComponent implements OnInit, OnChanges {
  @Input('used') value: number = 0;
  @Input('available') max: number = 100;
 
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    if (changes.value && isNaN(changes.value.currentValue)) this.value = 0;
    if (changes.max && isNaN(changes.max.currentValue)) this.max = 100;    
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }
}
