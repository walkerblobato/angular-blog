import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataNoticie } from '../../data/dataNotice';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photCover: string = "";
  contentTitle: string = "";
  contentDescription: string[] = [];
  private id: string | null = "0";


  constructor( private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    );

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataNoticie.filter(article => article.id == id)[0];
    console.log(result);

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photCover = result.photoCover;
  }
}
