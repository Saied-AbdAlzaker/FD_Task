import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  ngOnInit(): void {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: 'category',
        data: ['ديسمبر', 'نوفمبر', 'اكتوبر', 'سبنمبر', 'اغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير']
      },
      yAxis: {
        type: 'value',
        show: false
      },
      axisPointer:{
        show: false
      },
      series: [
        {
          data: [600, 700, 300, 400, 1300, 1100, 1000, 900, 820, 600, 300, 934],
          type: 'line',
          smooth: true
        }
      ]
    };

    option && myChart.setOption(option);
  }

}
