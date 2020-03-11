import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specie } from './species.model';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  model = 'species'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  findOne(specie: Specie) {
    return this.httpClient.get(this.getUrlForId(specie));
  }

  create(specie) {
    return this.httpClient.post(this.getUrl(), specie);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(specie: Specie) {
    return this.httpClient.patch(this.getUrlForId(specie.id), specie);
  }

  delete(specie: Specie) {
    return this.httpClient.delete(this.getUrlForId(specie.id));
  }
}
