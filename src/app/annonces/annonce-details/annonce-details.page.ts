import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnoncesService } from 'src/app/annonces.service';
@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.page.html',
  styleUrls: ['./annonce-details.page.scss'],
})
export class AnnonceDetailsPage implements OnInit {
  id: any;
  annonce: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private annoncesService: AnnoncesService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.annonce = this.annoncesService.getAnnonceById(this.id);
    this.annoncesService.getAnnonceById(this.id).subscribe({
      next: (data) => {
        this.annonce = data;
        console.log('data', data);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
    console.log('AnnonceDetailsPage ngOnInit', this.annonce);
  }
  deleteAnnonce() {
    this.annoncesService.deleteAnnonceById(this.id).subscribe({
      next: (data) => {
        console.log('id', this.id);
        this.router.navigate(['/annonces']);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
  // backButton() {
  //   console.log('backButton');
  //   this.router.navigate(['/annonces']);
  // }
}