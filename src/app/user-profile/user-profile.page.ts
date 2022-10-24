import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {


  UserMail='';
  name=""
  user :any;
  listAnnonces =[]
  constructor( private announceService: AnnoncesService,private userserv :AuthService) { }


  ngOnInit() {
   this.UserMail= window.localStorage.getItem('email');
   this.userserv.getUser(this.UserMail).subscribe({

    next :(data)=> {
      this.user=data[Object.keys(data)[0]]
      
     

    }
   })

   
   this.announceService.getAnnonceByUId(this.UserMail).subscribe({
    next :(data)=>{
      this.listAnnonces = [];
        for (const key in data) {
          this.listAnnonces.push({ id: key, ...data[key] });
        }



    }



   }) 



  




  }

}
