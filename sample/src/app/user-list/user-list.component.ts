import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../user";
import { UserService } from "../user.service";
import { Router} from "@angular/router";
import { Observable, of } from "rxjs";



@Component({
  selector: "app-login",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userDataFetching();
  }
  userDataFetching() {
    this.users = this.userService.getUsersList();
  }
  updateUser(_id: string) {
    this.router.navigate(["update", _id]);
  }

  updateDetails(_id: string) {
    this.router.navigate(["details", _id]);
  }
  deleteUser(_id: string) {
    this.userService.deleteUser(_id).subscribe(
		data =>{
			console.log("delete user in the database", data)
			this.userDataFetching()
		},

		error =>console.log(error));
		
	
  }
}