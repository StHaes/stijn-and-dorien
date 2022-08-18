import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MongodbService} from '../mongodb.service';
import {DocumentInterface} from '../interfaces/document.interface';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css']
})
export class AttendanceFormComponent implements OnInit {
  form: FormGroup;
  error = false;
  formError = false;
  succesMessage = false;

  dietOptions = [
    'ik eet alles', 'vegetarisch'
  ];

  arrivalTimes = [
    'Gemeentehuis', 'Receptie', 'Diner', 'Welkomsdrink'
  ]

  constructor(private formBuilder: FormBuilder,
              private service: MongodbService) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      present: [false, [Validators.required]],
      diet: ['', [Validators.required]],
      allergies: ['', [Validators.required]],
      arrival: ['', [Validators.required]],
      remarks: ['', []]
    });
    this.form.valueChanges.subscribe((value) => {
      this.resetErrors();
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {

    if (this.form.valid) {
      const documentInterface: DocumentInterface = {
        // @ts-ignore
        firstName: this.form.get('firstName').value,
        // @ts-ignore
        name: this.form.get('name').value,
        // @ts-ignore
        present: this.form.get('present').value,
        // @ts-ignore
        diet: this.form.get('diet').value,
        // @ts-ignore
        remarks: this.form.get('remarks').value ? this.form.get('remarks').value : '',
        // @ts-ignore
        arrival: this.form.get('arrival').value
      }

      this.service.saveForm(documentInterface).subscribe((response) => {
        this.clearForm(true);
        }, (error1 => {
        this.error = true;
      }))
    } else {
      this.formError = true;
    }


  }

  clearForm(succes: boolean): void {
    this.succesMessage = succes;
    this.form.reset();
  }

  resetErrors(): void {
    this.succesMessage = false;
    this.formError = false;
    this.error = false;
  }

}
