import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent implements OnInit {
  @Input() node: any;

  constructor() { }

  ngOnInit(): void {
  }

  isDanger(prop: string) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

}
