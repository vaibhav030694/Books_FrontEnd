import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [MatIcon, NgxChartsModule, MatButtonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  chartOptions: any = null;
  view: [number, number] = [700, 400];
  data: any;

  constructor(private router: Router, private bookService: BookService){ }

  navigateToHome() {
    this.router.navigate(['/app-home']);
  }

  ngOnInit(): void {
    this.getStatsForBooks();

  }


  getStatsForBooks(){
    this.bookService.getReadingBookListStats().subscribe((data: any) => {

      this.data = [
        { name: 'Unread', value: data.unreadCount },
        { name: 'InProgress', value: data.inProgressCount },
        { name: 'Finished', value: data.finishedCount }
      ];
      console.log('api success stats')
      this.generateChart(data)

    });
  }

  generateChart(data: any){
    this.chartOptions = {
      title: {
        text: "Book Status"
      },
      data: [{
        type: "column",
        dataPoints: [
          { label: "Unread",  y: data.unreadCount  },
          { label: "In progress", y: data.inProgressCount  },
          { label: "Finished",  y: data.finishedCount  }
        ],
      }]
    };
  }
}
