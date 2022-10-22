import { Component, OnInit, ViewChild } from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
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
    console.log('AnnoncePage ngOnInit');
    this.allAnnonces();
    console.log('AnnoncePage ngOnInit', this.listAnnonces);
  }
  seeDetails(id) {
    console.log('ID/', id);
    this.router.navigate(['/annonce-details', id]);
  }

  constructor(
    private announceService: AnnoncesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
}
