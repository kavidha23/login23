import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {

  _id: string;
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  

  ngOnInit() {

    this._id = this.route.snapshot.params['id'];
    this.userService.getUser(this._id).subscribe(data => {
      this.user = data

    }, error => console.log(error));
  }
  list(){

    this.router.navigate(['login'])
  }
}
