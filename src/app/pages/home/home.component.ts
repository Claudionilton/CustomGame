import { Component, OnInit } from '@angular/core';
import { githubService } from '../../_service/github.service';
import { getUnpackedSettings } from 'http2';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
 constructor(private githubService: githubService){

  }

  ngOnInit(): void {
    this.githubService.getUsuarios().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }
}
