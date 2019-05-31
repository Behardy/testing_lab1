import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: any; 
  constructor(private profileService: ProfileService) {
    this.profile=this.profileService.getUserProfile()
   }

  ngOnInit() {
  }

}
