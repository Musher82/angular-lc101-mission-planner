import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', favoriteFood: 'Lutefisk'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', favoriteFood: 'Clif Bars'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', favoriteFood: 'Nutella'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', favoriteFood: 'Ice Cream'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', favoriteFood: 'Eggs and Toast'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', favoriteFood: 'Steak Sammies'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', favoriteFood: 'Oranges'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(member: object) {
     if (this.crew.includes(member)) {
       this.inCrew = true;
     } else {
       this.inCrew = false;
     }
     if (this.inCrew) {
       let index = this.crew.indexOf(member);
       this.crew.splice(index, 1);
     } else if (!this.inCrew && this.crew.length <3){
       this.crew.push(member);
     }
  }

}
