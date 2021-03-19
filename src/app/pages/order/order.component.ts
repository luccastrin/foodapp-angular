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
    });

    console.log(this.formContent);
  }

  formValidation(type: string) {
    let valid = this.formContent.get(type).valid;
    let dirty = this.formContent.get(type).dirty;
    let touched = this.formContent.get(type).touched;

    return valid && dirty && touched ? 'success' : 'error';
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
}
