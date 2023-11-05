import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Some Title';

  cards = [{
    IMG: "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" , 
    Title: "First Card",
    Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos"
    },

    {
      IMG: "https://cdn.motor1.com/images/mgl/ZnmO23/s1/future-cars-2023-2026.webp", 
      Title: "Second Card",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos."
    },

    {
      IMG: "https://media.gq-magazine.co.uk/photos/648ae7e8b0c390be7c4343f0/master/pass/Mercedes-concept-Vision-One-Eleven-hp.jpeg",
      Title: "Mercedes Z-Klass",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos"
    },

    {
      IMG: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9UjuyAM8_iQc3VDTZVOOXeY7LcDj6aD_hg&usqp=CAU" , 
      Title: "Mercedes galaxy",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos."
    },

    {
      IMG: "https://carwow-uk-wp-3.imgix.net/Medium-39588-Mercedes-BenzConceptEQG-scaled-e1675695000855.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600" , 
      Title: "Mercedes G-Klass",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos."
    },

    {
      IMG: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppyNXYOY0qwFRFoNiPXl7xUGCKn4gdxj4Eg&usqp=CAU" , 
      Title: "Mercedes G-Klass",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos."
    }
  ]

  changeTitleHandler(title: string){
    this.title = title;
  }
}
