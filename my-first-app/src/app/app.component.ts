import { Component } from '@angular/core';
import { ChartModule } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title='My test';
  name ='';

    data: any;
    chart: any;
options = {
  responsive: false,
  maintainAspectRatio: false
};
    constructor() {
        this.data = {
            labels: [],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    borderColor:[
                        "#000000",
                        "#000000",
                        "#000000"
                    ]
                }]    
            };
    }
}