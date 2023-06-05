import { Component } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

  
  getProgressBarStyles(completion: number) {
    let color,gradient;
    if (completion >90) {
      color = ' #98EC2D';
      
    }else if (completion >50) {
      color = 'green';
   
    } else if  (completion < 100) {
      color='red';
  
    }
  
    return {
      'accent-Color': color,
      'height': '20px',
     
    };
  }
  
   UserData = [
    {SELLER:'Amit Mishra',email:'ThuanDM@mail.com',BUDGET:'$900,000',AMOUNT:'550',COMPLETION:60,image:'assets/Rectangle 2 (1).png',},
      {SELLER:'Van Khuong',email:'Kaito@mail.com',BUDGET:'$800,000',AMOUNT:'250',COMPLETION:30,image: 'assets/image 1.png'},
      {SELLER:'Tuan Minh',email:'MinhVu@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 2 (2).png'},
      {SELLER:'xyz Hien',email:'HienMumMim@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 3.png'},
      {SELLER:'Thanh Liem',email:'LiemGanhTeam@mail.com',BUDGET:'$500,000',AMOUNT:'400',COMPLETION:80,image: 'assets/Rectangle 4.png'},
      {SELLER:'Minh Vo',email:'MinhVoxx@mail.com',BUDGET:'$500,000',AMOUNT:'450',COMPLETION:90,image: 'assets/Rectangle 5.png'},
      {SELLER:'mrunali Bachhav',email:'Mrunali@mail.com',BUDGET:'$300,000',AMOUNT:'350',COMPLETION:25,image: 'assets/Rectangle 2 (1).png'},
      {SELLER:'Gaytri',email:'Gaytri@mail.com',BUDGET:'$200,000',AMOUNT:'250',COMPLETION:70,image: 'assets/image 1.png'},
      {SELLER:'Samurddhi',email:'Samurddhi@mail.com',BUDGET:'$700,000',AMOUNT:'550',COMPLETION:50,image: 'assets/Rectangle 5.png'},
      {SELLER:'Mansi',email:'Mansix@mail.com',BUDGET:'$550,000',AMOUNT:'400',COMPLETION:40,image: 'assets/Rectangle 5.png'},
      {SELLER:'Shalin',email:'Shalin@mail.com',BUDGET:'$200,000',AMOUNT:'650',COMPLETION:55,image: 'assets/Rectangle 4.png'},
      {SELLER:'Atul',email:'Atulx@mail.com',BUDGET:'$300,000',AMOUNT:'350',COMPLETION:60,image: 'assets/Rectangle 5.png'},
      {SELLER:'Divyesh',email:'Divyesh@mail.com',BUDGET:'750,000',AMOUNT:'650',COMPLETION:90,image: 'assets/Rectangle 2 (1).png'},
      {SELLER:'Rohit',email:'Rohit@mail.com',BUDGET:'$400,000',AMOUNT:'250',COMPLETION:35,image: 'assets/image 1.png'},
      {SELLER:'Akansha',email:'Akansha@mail.com',BUDGET:'$600,000',AMOUNT:'350',COMPLETION:70,image: 'assets/Rectangle 5.png'},
      {SELLER:'Tejal',email:'Tejal@mail.com',BUDGET:'$650,000',AMOUNT:'450',COMPLETION:60,image: 'assets/Rectangle 4.png'},
      {SELLER:'Mahesh',email:'Mahesh@mail.com',BUDGET:'200,000',AMOUNT:'850',COMPLETION:40,image: 'assets/Rectangle 5.png'},
      {SELLER:'Ashwini',email:'Ashwini@mail.com',BUDGET:'$200,000',AMOUNT:'650',COMPLETION:100,image: 'assets/Rectangle 5.png'},
      {SELLER:'Arti',email:'Arti@mail.com',BUDGET:'$500,000',AMOUNT:'450',COMPLETION:30,image: 'assets/Rectangle 2 (1).png'},
      {SELLER:'Pratik',email:'Pratik@mail.com',BUDGET:'$700,000',AMOUNT:'650',COMPLETION:60,image: 'assets/image 1.png'},
      {SELLER:'Shubham',email:'Shubham@mail.com',BUDGET:'$600,000',AMOUNT:'250',COMPLETION:50,image: 'assets/Rectangle 5.png'},
      {SELLER:'Sagar',email:'Sagar@mail.com',BUDGET:'$800,000',AMOUNT:'850',COMPLETION:75,image: 'assets/Rectangle 4.png'},
      {SELLER:'Darshna',email:'Darshnax@mail.com',BUDGET:'$500,000',AMOUNT:'450',COMPLETION:40,image: 'assets/Rectangle 2 (1).png'},
      {SELLER:'Bhakti',email:'Bhakti@mail.com',BUDGET:'$600,000',AMOUNT:'950',COMPLETION:60,image: 'assets/image 1.png'},
      {SELLER:'Monika',email:'Monika@mail.com',BUDGET:'$200,000',AMOUNT:'450',COMPLETION:90,image: 'assets/Rectangle 5.png'},
      {SELLER:'Yashu',email:'Yashu@mail.com',BUDGET:'$500,000',AMOUNT:'650',COMPLETION:90,image: 'assets/Rectangle 4.png'},
      {SELLER:'Rushikesh',email:'rushikesh@mail.com',BUDGET:'$650,000',AMOUNT:'350',COMPLETION:50,image: 'assets/Rectangle 5.png'},
      {SELLER:'Rupali',email:'Rupali@mail.com',BUDGET:'$400,000',AMOUNT:'250',COMPLETION:70,image: 'assets/Rectangle 5.png'},
      {SELLER:'Anjali',email:'Anjali@mail.com',BUDGET:'$500,000',AMOUNT:'450',COMPLETION:90,image: 'assets/image 1.png'},
      {SELLER:'abc Thuan',email:'ThuanDM@mail.com',BUDGET:'$900,000',AMOUNT:'550',COMPLETION:60,image: 'assets/Rectangle 2 (1).png',},
      {SELLER:'Van Khuong',email:'Kaito@mail.com',BUDGET:'$800,000',AMOUNT:'250',COMPLETION:30,image: 'assets/image 1.png'},
      {SELLER:'Tuan Minh',email:'MinhVu@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 2 (2).png'},
      {SELLER:'xyz Hien',email:'HienMumMim@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 3.png'},
      {SELLER:'Thanh Liem',email:'LiemGanhTeam@mail.com',BUDGET:'$500,000',AMOUNT:'400',COMPLETION:80,image: 'assets/Rectangle 4.png'},
      {SELLER:'Minh Vo',email:'MinhVoxx@mail.com',BUDGET:'$500,000',AMOUNT:'450',COMPLETION:90,image: 'assets/Rectangle 5.png'},
      {SELLER:'abc Thuan',email:'ThuanDM@mail.com',BUDGET:'$900,000',AMOUNT:'550',COMPLETION:60,image: 'assets/Rectangle 2 (1).png',},
      {SELLER:'Van Khuong',email:'Kaito@mail.com',BUDGET:'$800,000',AMOUNT:'250',COMPLETION:30,image: 'assets/image 1.png'},
      {SELLER:'Tuan Minh',email:'MinhVu@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 2 (2).png'},
      {SELLER:'xyz Hien',email:'HienMumMim@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 3.png'},
      {SELLER:'Thanh Liem',email:'LiemGanhTeam@mail.com',BUDGET:'$500,000',AMOUNT:'400',COMPLETION:80,image: 'assets/Rectangle 4.png'},
      {SELLER:'abc Thuan',email:'ThuanDM@mail.com',BUDGET:'$900,000',AMOUNT:'550',COMPLETION:60,image: 'assets/Rectangle 2 (1).png',},
      {SELLER:'Van Khuong',email:'Kaito@mail.com',BUDGET:'$800,000',AMOUNT:'250',COMPLETION:30,image: 'assets/image 1.png'},
      {SELLER:'Tuan Minh',email:'MinhVu@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 2 (2).png'},
      {SELLER:'xyz Hien',email:'HienMumMim@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 3.png'},
      {SELLER:'Thanh Liem',email:'LiemGanhTeam@mail.com',BUDGET:'$500,000',AMOUNT:'400',COMPLETION:80,image: 'assets/Rectangle 4.png'},
      {SELLER:'abc Thuan',email:'ThuanDM@mail.com',BUDGET:'$900,000',AMOUNT:'550',COMPLETION:60,image: 'assets/Rectangle 2 (1).png',},
      {SELLER:'Van Khuong',email:'Kaito@mail.com',BUDGET:'$800,000',AMOUNT:'250',COMPLETION:30,image: 'assets/image 1.png'},
      {SELLER:'Tuan Minh',email:'MinhVu@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 2 (2).png'},
      {SELLER:'xyz Hien',email:'HienMumMim@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 3.png'},
      {SELLER:'Thanh Liem',email:'LiemGanhTeam@mail.com',BUDGET:'$500,000',AMOUNT:'400',COMPLETION:80,image: 'assets/Rectangle 4.png'},
      {SELLER:'abc Thuan',email:'ThuanDM@mail.com',BUDGET:'$900,000',AMOUNT:'550',COMPLETION:60,image: 'assets/Rectangle 2 (1).png',},
      {SELLER:'Van Khuong',email:'Kaito@mail.com',BUDGET:'$800,000',AMOUNT:'250',COMPLETION:30,image: 'assets/image 1.png'},
      {SELLER:'Tuan Minh',email:'MinhVu@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 2 (2).png'},
      {SELLER:'abc Thuan',email:'ThuanDM@mail.com',BUDGET:'$900,000',AMOUNT:'550',COMPLETION:60,image: 'assets/Rectangle 2 (1).png',},
      {SELLER:'Van Khuong',email:'Kaito@mail.com',BUDGET:'$800,000',AMOUNT:'250',COMPLETION:30,image: 'assets/image 1.png'},
      {SELLER:'Tuan Minh',email:'MinhVu@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 2 (2).png'},
      {SELLER:'xyz Hien',email:'HienMumMim@mail.com',BUDGET:'$600,000',AMOUNT:'600',COMPLETION:100,image: 'assets/Rectangle 3.png'},
      {SELLER:'Thanh Liem',email:'LiemGanhTeam@mail.com',BUDGET:'$500,000',AMOUNT:'400',COMPLETION:80,image: 'assets/Rectangle 4.png'},
      {SELLER:'Minh Vo',email:'MinhVoxx@mail.com',BUDGET:'$500,000',AMOUNT:'450',COMPLETION:90,image: 'assets/Rectangle 5.png'},
  ]
   
}
