import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
  UserData = [
    {Id:'#NGUYENVANKHUONG_LAPTOP_HP_NO_999',DATE:'March, 01, 2021',price:'$1118.34',image:'assets/.png',EXPORT:'PDF'},
    {Id:'#TRANTRUNGHIEN_LAPTOP_DELL_NO_998',DATE:'March, 01, 2021',price:'$2552.54',image:'assets/.png',EXPORT:'PDF'},
    {Id:'#DANGMINHTHUAN_LAPTOP_DELL_NO_997',DATE:'February, 28, 2021',price:'$1655.54',image:'assets/.png',EXPORT:'PDF'},
    {Id:'#VUTUANMINH_LAPTOP_ASUS_NO_996',DATE:'February, 28, 2021',price:'$1804.02',image:'assets/.png',EXPORT:'PDF'},
    {Id:'#NGUYENVANKHUONG_LAPTOP_APPLE_NO_995',DATE:'February, 28, 2021',price:'$2554.321',image:'assets/.png',EXPORT:'PDF'},
  ]
}
