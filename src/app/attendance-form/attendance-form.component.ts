import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MongodbService} from '../mongodb.service';
import {DocumentInterface} from '../interfaces/mongoDb.interface';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css']
})
export class AttendanceFormComponent implements OnInit {
  form: FormGroup;
  error = false;
  formError = false;

  dietOptions =  [
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
      remarks: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(){

    if (this.form.valid) {
      // @ts-ignore
      console.log('Name:' + this.form.get('firstName').value);
      // @ts-ignore
      console.log('Name:' + this.form.get('name').value);
      // @ts-ignore
      console.log('Name:' + this.form.get('present').value);
      // @ts-ignore
      console.log('Name:' + this.form.get('diet').value);
      // @ts-ignore
      console.log('Name:' + this.form.get('arrival').value);
      // @ts-ignore
      console.log('Name:' + this.form.get('remarks').value);


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
        remarks: this.form.get('remarks').value,
        // @ts-ignore
        arrival: this.form.get('arrival').value
      }

      this.service.saveForm(documentInterface).subscribe((response) => {
        console.log('response: ', response);

      }, (error1 => {
        console.log(error1);
        this.error = true;
      }))
    } else {
      this.formError = true;
    }



  }

}
