import { Injectable } from '@angular/core';

import { Adapter } from '../adapter';

export class Teammate {
  constructor(
    public id: string,
    public fullName: string,
    public location: string,
    public timezone: string,
    public phone: string,
    public email: string,
    public photo: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class TeammateAdapter implements Adapter<Teammate> {
  adapt(item: any): Teammate {
    return new Teammate(
      item.id.value,
      `${item.name.first} ${item.name.last}`,
      `${item.location.city}, ${item.location.state}`,
      `${item.location.timezone.offset} ${item.location.timezone.description}`,
      item.phone,
      item.email,
      item.picture.large
    );
  }
}
