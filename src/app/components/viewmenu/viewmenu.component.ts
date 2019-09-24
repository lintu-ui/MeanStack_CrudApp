import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Menu } from '../../service/adminmenu.model';


@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrls: ['./viewmenu.component.css']
})
export class ViewmenuComponent implements OnInit {




  constructor(private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
) 


{ }

  ngOnInit() 
  {

  	this.refreshEmployeeList();
  }


refreshEmployeeList() {
    this.apiService.Getmenu().subscribe((res) => {
      this.apiService.menus = res as Menu[];
    });
  }


}
