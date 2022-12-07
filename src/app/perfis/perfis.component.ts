import { Component, OnInit } from '@angular/core';
import { Perfis } from './perfis';
import { PerfisService } from './perfis.service';

@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.scss']
})
export class PerfisComponent implements OnInit {
  exibirperfis:Perfis[]=[];
  constructor(private service: PerfisService) { }

  ngOnInit(): void {
    this.service.listarPerfis().subscribe((event)=> {
      this.exibirperfis = event.admins as Perfis[]
      console.log(event)
    })
  }

}
