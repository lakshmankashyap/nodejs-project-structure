import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons  } from '@ng-bootstrap/ng-bootstrap';
import { PopupBookComponent } from '../popup/book/book.component';

@Component({
  selector: 'admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.scss']
})
export class AdminBookComponent implements OnInit {
public showModal: boolean = false;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  public open(): void {
    const modalRef = this.modalService.open(PopupBookComponent);
    //modalRef.componentInstance.name = 'World';
  }
  openPrimary(content) {
    this.showModal = true;
    this.modalService.open(PopupBookComponent, {ariaLabelledBy: 'modal-primary-title'});
   
  }

//   showModal(content) {  
//     this.modalService.open(PopupBookComponent).result.then(  
//         (closeResult) => {  
//             //modal close  
//             console.log("modal closed : ", closeResult);  
//         }, (dismissReason) => {  
//             //modal Dismiss  
//             if (dismissReason == ModalDismissReasons.ESC) {  
//                 console.log("modal dismissed when used pressed ESC button");  
//             } else if (dismissReason == ModalDismissReasons.BACKDROP_CLICK) {  
//                 console.log("modal dismissed when used pressed backdrop");  
//             } else {  
//                 console.log(dismissReason);  
//             }  
//         })  
// } 

}
