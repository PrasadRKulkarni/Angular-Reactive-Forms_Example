import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder-example',
  templateUrl: './form-builder-example.component.html',
  styleUrls: ['./form-builder-example.component.css']
})
export class FormBuilderExampleComponent implements OnInit {

  addLoanFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {

    this.addLoanFormGroup = this.fb.group({
      'loanName': new FormControl('Prasad Home Loan'),
      'loanDesc': new FormControl('Home loan for home')
    });

  }

  addLoan(): void {
    console.log(this.addLoanFormGroup.value);
  }

}
