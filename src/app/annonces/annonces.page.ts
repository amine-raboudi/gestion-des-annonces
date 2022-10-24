import { Component, OnInit, ViewChild } from '@angular/core';
import { AnnoncesService } from '../services/annonces.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'annonces.page.html',
  styleUrls: ['annonces.page.scss'],
})
export class AnnoncePage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  listAnnonces = [];
  segment = 0;
  userEmail: string;
  user :any;
  
  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  allAnnonces() {
    return this.announceService.getAllAnnonces().subscribe({
      next: (data) => {
        this.listAnnonces = [];
        for (const key in data) {
          this.listAnnonces.push({ id: key, ...data[key] });
        }
        console.log('data', data);
      },
    });
  }
  ngOnInit() {
    this.userEmail = window.localStorage.getItem('email');
    this.userserv.getUser(this.userEmail).subscribe({

      next :(data)=> {
        this.user=data[Object.keys(data)[0]]
        
       
  
      }
     })
    console.log('AnnoncePage ngOnInit');
    this.allAnnonces();
    console.log('AnnoncePage ngOnInit', this.listAnnonces);
  }
  seeDetails(id) {
    console.log('ID/', id);
    this.router.navigate(['/annonce-details', id]);
  }
  SignOut() {
    return this.userserv.auth.signOut().then(() => {
      
      this.router.navigate(['/home'])
    });
  }


  constructor(
    private announceService: AnnoncesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userserv :AuthService
  ) {}
}
