import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-example',
  templateUrl: './form-group-example.component.html',
  styleUrls: ['./form-group-example.component.css']
})
export class FormGroupExampleComponent implements OnInit {

  addLoanFormGroup: FormGroup;

  ngOnInit(): void {

    this.addLoanFormGroup = new FormGroup({
      'loanName': new FormControl('Prasad Test',
        [
          Validators.required, Validators.minLength(2)
        ]
      ),
      'loanDesc': new FormControl('Prasad Desc')
    });

  }

  addLoan(): void {
    //console.log(this.addLoanFormGroup.value);
    //Read the values from text box
    console.log(this.addLoanFormGroup.get('loanName').value);
    console.log(this.addLoanFormGroup.get('loanDesc').value);

  }


  reset() {
    this.addLoanFormGroup.reset();
  }

}
