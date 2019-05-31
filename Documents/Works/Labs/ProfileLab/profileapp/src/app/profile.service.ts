import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: any [] =[
    {
      name:"Grant Chirpus", Contact:".com",Bio:"what ever"
    }

  ];
  constructor() { }

getUserProfile():any [] {
return this.profile;
}
setUserProfile(){

}
editProfile(){
this.profile= this.profile.push
}
}