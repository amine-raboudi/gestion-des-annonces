import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AnnoncesService {
  
  getAllAnnonces(): Observable<any> {
    //return this.annonces;
    //this.httpClient.get('https://mydatabase-65630.firebaseio.com');
    return this.httpClient.get(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce.json'
    );
  }
  addAnnonce(annonce: any): Observable<any> {
    return this.httpClient.post(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce.json',
      annonce
    );
  }
  // Get Annonce By ID
  getAnnonceById(id: any): Observable<any> {
    return this.httpClient.get(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce/' +
        id +
        '.json'
    );
  }


  getAnnonceByUId(Mail: any): Observable<any> {

    return this.httpClient.get(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce.json?orderBy="createdBy"&equalTo="'+Mail+'"'
    );
  }
  // Delete annonce:
  deleteAnnonceById(id: any): Observable<any> {
    return this.httpClient.delete(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce/' +
        id +
        '.json'
    );
  }
  // Update annonce:
  updateAnnonce(annonce: any): Observable<any> {
    //this.annonces.push(annonce);
    return this.httpClient.put(
      'https://gestion-des-annonces-default-rtdb.europe-west1.firebasedatabase.app/annonce/' +
        annonce.id +
        '.json',
      annonce
    );
  }
  constructor(private httpClient: HttpClient) {}
}
