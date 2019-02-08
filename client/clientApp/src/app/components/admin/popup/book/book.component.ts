import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IBookViewModel } from '../../../../../../../../shared/viewModels';

@Component({
  selector: 'popup-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class PopupBookComponent{
  @Input() name;

  public book:IBookViewModel;
  public selectedPersonId;
  public test1 = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys'}
];

  constructor(private modalService: NgbModal) {
  }

  public close(content): void {
    this.modalService.dismissAll(this);
  }


}
