import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/core/_services/user.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {

  // Books data will pass in from parent component
  @Input() books: any; //TODO - Create Book Model

  constructor(private _userService: UserService){}
  addToCart(bookId:string){
    // this._userService.
  }
}
