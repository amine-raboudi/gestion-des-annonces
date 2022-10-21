import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'annonces.page.html',
  styleUrls: ['annonces.page.scss'],
})
export class AnnoncePage implements OnInit {
  listAnnonces = [];
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
