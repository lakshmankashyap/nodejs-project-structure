import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthorService } from 'src/app/shared/services/author.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAuthorViewModel } from '../../../../../../../../shared/viewModels';


@Component({
  selector: 'popup-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class PopupAuthorComponent implements OnInit {
  @Input() public author: IAuthorViewModel;

  public authorForm: FormGroup;
  public submitted: boolean = false;

  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authorService: AuthorService) {
     
  }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      name: [this.author.name, [Validators.required, Validators.minLength(3)]]
    });
  }

  get f() { return this.authorForm.controls; }


  public save(): void {
    this.submitted = true;
    if (this.authorForm.invalid) {
      return;
    }

     this.authorService.add(this.authorForm.value).then(res => {
console.log(res)
    })
  }

  public close(content): void {
    this.modalService.dismissAll(this);
  }
}
