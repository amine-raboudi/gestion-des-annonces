import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnoncesService } from 'src/app/annonces.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {
  annonce: any;
  constructor(
    private annoncesService: AnnoncesService,
    private router: Router
  ) {}

  ngOnInit() {}
  addAnnonce(formValue: any) {
    //get Storage User.username
    this.annonce = { createdBy: 'Ahdy K', ...formValue };
    return this.annoncesService.addAnnonce(this.annonce).subscribe({
      next: (data) => {
        console.log('data', data);
        this.router.navigate(['/annonces']);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
}
