import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Options } from 'ng5-slider';
interface SimpleSliderModel {
  value: number;
  options: Options;
}
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})


export class ExploreContainerComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  @Input() name: string;
  public currentIndex:number=1;
  public totalSteps:number=2;
  selectedAnswer: string;
  ratedSymptom:string= 'something';
  Symptoms = [
    ['Racing Thoughts', false],
   [ 'Anxiety',false],
    ['Nightmares',false],
    ['Pop',false],
['Light',false],
['Stress',false],
['Noise',false],
['Work',false],
['Spending time with friends',false],
['Obligations',false]
  ];
  SelectedSymptoms: any =[];

    value: number = 1;
    options: Options = {
      floor: 0,
      ceil: 5,
      vertical: true,
      
      showSelectionBar: true,
      selectionBarGradient: {
        from: 'red',
        to: 'green'
      },
      showTicksValues: true,  
      stepsArray: [
        {value: 5, legend: 'Almost Everyday'}, 
       
        {value: 4, legend: 'More than half the days'},
        
        {value: 3, legend: 'Several Days'},
        {value: 2, legend: 'A few Days'},

        {value: 1, legend: 'Almost Never'},

        
      ]    
    };
  

  constructor() { }

  ngOnInit() {

    this.slides?.lockSwipes(true)

  }

  selectionChange(event) {
    console.log("radioGroupChange",event.detail); 
    this.selectedAnswer = event.detail;
    if(event.detail.value>3){
      this.totalSteps=3;
    }
    else{
      this.totalSteps=2;

    }
  }
 moveNext(slider){
  this.slides.lockSwipes(false)
   if(this.SelectedSymptoms.length>0){
     this.ratedSymptom = this.SelectedSymptoms[this.currentIndex-2];

   }
   slider.slideNext();
   this.currentIndex+=1;
   this.slides.lockSwipes(true)
 }
 movePrevious(slider){
  this.slides.lockSwipes(false)
   slider.slidePrev();
   
   if(this.SelectedSymptoms.length>0){
     this.ratedSymptom = this.SelectedSymptoms[this.currentIndex-2];
 
   }
   this.currentIndex-=1;
   this.slides.lockSwipes(true)
}

symptomSelected(symptom){ 

  symptom[1] = !symptom[1];
  if(symptom[1]){

    this.SelectedSymptoms.push(symptom[0]);
  }
  else{
    this.SelectedSymptoms.pop(symptom[0]);

  }
  if(this.SelectedSymptoms.length>0){
    this.totalSteps=3+this.SelectedSymptoms.length-1;
  }
  else{
    this.totalSteps=2;

  }
  
}

}
