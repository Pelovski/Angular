import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from 'src/interaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent  implements OnInit{

  themeList:ITheme[] | null = null;

  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.apiService.loadThemes().subscribe(value => {
      this.themeList = value;
    });
  }
}
