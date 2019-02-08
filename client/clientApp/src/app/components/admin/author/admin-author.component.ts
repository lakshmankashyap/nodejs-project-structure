import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PopupAuthorComponent } from '../popup/author/author.component';
import { AuthorService } from 'src/app/shared/services/author.service';
import { IAuthorViewModel } from '../../../../../../../shared/viewModels';

@Component({
  selector: 'admin-author',
  templateUrl: './admin-author.component.html',
  styleUrls: ['./admin-author.component.scss']
})
export class AdminAuthorComponent implements OnInit {
  public showModal: boolean = false;
  public authorList: IAuthorViewModel[] = [];

  constructor(private modalService: NgbModal,
    private authorService: AuthorService) {
    this.authorService.get().then(res => {
      this.authorList = res.data.author
    })
  }

  ngOnInit() {
  }

  openPrimary(content: IAuthorViewModel) {
    this.showModal = true;
    let modalRef = this.modalService.open(PopupAuthorComponent, {
      ariaLabelledBy: 'modal-primary-title',
    });

    if(!content){
      let authorData: IAuthorViewModel = {
        _id: '',
        name: ''
      }
      modalRef.componentInstance.author = authorData;
    }
    modalRef.componentInstance.author = content;
    console.log(modalRef.componentInstance)
  }
}
