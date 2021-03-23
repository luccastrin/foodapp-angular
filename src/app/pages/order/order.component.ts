import { Component, OnInit } from '@angular/core';
import { CartOrderService } from './services/cart-order.service';
import { CartItem } from '../restaurant-detail/models/cart-item.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  validar: boolean = false;
  formContent: FormGroup;

  constructor(
    private cartOrderService: CartOrderService,
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formContent = this.form.group({
      name: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      confirm: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      radios: this.form.group({
        radio_button: ['', Validators.required]
      })
    });

    console.log(this.formContent);
  }

  inputValidation(type: string) {
    let valid = this.formContent.get(type).valid;
    let dirty = this.formContent.get(type).dirty;
    let touched = this.formContent.get(type).touched;

    if (touched) {
      return valid && dirty && touched ? 'success' : 'error';
    }
  }

  formValidation() {
    return this.formContent.valid ? 'button-success' : 'button-disabled';
  }

  getDetailFromCart() {
    return this.cartOrderService.getDetailArr();
  }

  addQuantity(item: CartItem) {
    this.cartOrderService.getIncreaseQuantity(item);
  }

  removeQuantity(item: CartItem) {
    this.cartOrderService.getDrecreaseQuantity(item);
  }

  removeItem(item: CartItem) {
    this.cartOrderService.getRemoveItem(item);
  }

  total() {
    return this.cartOrderService.getTotal();
  }

  mappingForm() {
    return {
      name: this.formContent.get('name').value,
      email: this.formContent.get('email').value,
      confirm: this.formContent.get('confirm').value,
      address: this.formContent.get('address').value,
      number: this.formContent.get('number').value,
      complement: this.formContent.get('number').value,
      total: this.total()
      // radios: this.formContent.get('radios').
    }
  }

  submitForm() {
    let form = this.mappingForm();
    this.validar = true;
    console.log(form);
  }
}
