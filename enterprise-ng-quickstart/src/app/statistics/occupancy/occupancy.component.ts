import { Component, OnInit } from '@angular/core';
import { SohoHomePageComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.css']
})
export class OccupancyComponent implements OnInit {
  /**
     * Declare occupancies array
   **/
  occupancies: Object[];
  xAxis: {};
  yAxis: {};

  /**
   * Declare columns Array
  **/

  columns: SohoDataGridColumn[] = [
    { id: 'date', name: 'Date', field: 'date', sortable: false, width: 50},
    { id: 'capacity',   name: 'Capacity',   field: 'capacity', width: 50},
    { id: 'occupancy',   name: 'Occupancy',   field: 'occupancy', width: 50}
  ];

  /**
   * Declare json data to display chart line
  **/

  chartLineData = [
    {
      data: [
        {
          name: '01/01/2019',
          value: 100, depth: 4
        }, {
          name: '02/01/2019',
          value: 100
        },{
          name: '03/01/2019',
          value: 100
        }, {
          name: '04/01/2019',
          value: 99
        }, {
          name: '05/01/2019',
          value: 100
        }, {
          name: '06/01/2019',
          value: 100
        }, {
          name: '07/01/2019',
          value: 100
        }, {
          name: '08/01/2019',
          value: 100
        }, {
          name: '09/01/2019',
          value: 100
        }, {
          name: '10/01/2019',
          value: 100
        }, {
          name: '11/01/2019',
          value: 100
        }, {
          name: '12/01/2019',
          value: 100
        }, {
          name: '13/01/2019',
          value: 100
        }, {
          name: '14/01/2019',
          value: 100
        }, {
          name: '15/01/2019',
          value: 98
        }, {
          name: '16/01/2019',
          value: 100
        }, {
          name: '17/01/2019',
          value: 100
        }, {
          name: '18/01/2019',
          value: 97
        }, {
          name: '19/01/2019',
          value: 100
        }, {
          name: '20/01/2019',
          value: 100
        }, {
          name: '21/01/2019',
          value: 100
        }, {
          name: '22/01/2019',
          value: 100
        }, {
          name: '23/01/2019',
          value: 100
        }, {
          name: '24/01/2019',
          value: 100
        }, {
          name: '25/01/2019',
          value: 100
        }, {
          name: '26/01/2019',
          value: 100
        }, {
          name: '27/01/2019',
          value: 100
        }, {
          name: '28/01/2019',
          value: 100
        }, {
          name: '29/01/2019',
          value: 98
        }, {
          name: '30/01/2019',
          value: 100
        }, {
          name: '31/01/2019',
          value: 100
        }
      ],
      name: 'Capacity',
      color: 'blue'
    }, {
      data: [
        {
          name: '01/01/2019',
          value: 41
        }, {
          name: '02/01/2019',
          value: 78
        }, {
          name: '03/01/2019',
          value: 48
        }, {
          name: '04/01/2019',
          value: 42
        }, {
          name: '05/01/2019',
          value: 28
        }, {
          name: '06/01/2019',
          value: 23
        }, {
          name: '07/01/2019',
          value: 23
        }, {
          name: '08/01/2019',
          value: 30
        }, {
          name: '09/01/2019',
          value: 93
        }, {
          name: '10/01/2019',
          value: 14
        }, {
          name: '11/01/2019',
          value: 32
        }, {
          name: '12/01/2019',
          value: 36
        }, {
          name: '13/01/2019',
          value: 10
        }, {
          name: '14/01/2019',
          value: 75
        }, {
          name: '15/01/2019',
          value: 58
        }, {
          name: '16/01/2019',
          value: 78
        }, {
          name: '17/01/2019',
          value: 50
        }, {
          name: '18/01/2019',
          value: 7
        }, {
          name: '19/01/2019',
          value: 24
        }, {
          name: '20/01/2019',
          value: 50
        }, {
          name: '21/01/2019',
          value: 42
        }, {
          name: '22/01/2019',
          value: 25
        }, {
          name: '23/01/2019',
          value: 39
        }, {
          name: '24/01/2019',
          value: 17
        }, {
          name: '25/01/2019',
          value: 38
        }, {
          name: '26/01/2019',
          value: 88
        }, {
          name: '27/01/2019',
          value: 62
        }, {
          name: '28/01/2019',
          value: 52
        }, {
          name: '29/01/2019',
          value: 44
        }, {
          name: '20/01/2019',
          value: 72
        }, {
          name: '31/01/2019',
          value: 75
        }
      ],
      name: 'Occupancy',
      color: '#f05e23'
    }
  ];
  constructor() {
    //Push objects to occupancies array
    
    this.occupancies = [];
    this.occupancies.push({ date: '10/11/2015', capacity: 100, occupancy: 41});
    this.occupancies.push({ date: '02/01/2019', capacity: 100, occupancy: 78});
    this.occupancies.push({ date: '03/01/2019', capacity: 100, occupancy: 48});
    this.occupancies.push({ date: '04/01/2019', capacity: 99, occupancy: 42});
    this.occupancies.push({ date: '05/01/2019', capacity: 100, occupancy: 28});
    this.occupancies.push({ date: '06/01/2019', capacity: 100, occupancy: 23});
    this.occupancies.push({ date: '07/01/2019', capacity: 100, occupancy: 23});
    this.occupancies.push({ date: '08/01/2019', capacity: 100, occupancy: 30});
    this.occupancies.push({ date: '09/01/2019', capacity: 100, occupancy: 93});
    this.occupancies.push({ date: '10/01/2019', capacity: 100, occupancy: 14});
    this.occupancies.push({ date: '11/01/2019', capacity: 100, occupancy: 32});
    this.occupancies.push({ date: '12/01/2019', capacity: 100, occupancy: 36});
    this.occupancies.push({ date: '13/01/2019', capacity: 100, occupancy: 10});
    this.occupancies.push({ date: '14/01/2019', capacity: 100, occupancy: 75});
    this.occupancies.push({ date: '15/01/2019', capacity: 98, occupancy: 58});
    this.occupancies.push({ date: '16/01/2019', capacity: 100, occupancy: 78});
    this.occupancies.push({ date: '17/01/2019', capacity: 100, occupancy: 50});
    this.occupancies.push({ date: '18/01/2019', capacity: 97, occupancy: 7});
    this.occupancies.push({ date: '19/01/2019', capacity: 100, occupancy: 24});
    this.occupancies.push({ date: '20/01/2019', capacity: 100, occupancy: 50});
    this.occupancies.push({ date: '21/01/2019', capacity: 100, occupancy: 42});
    this.occupancies.push({ date: '22/01/2019', capacity: 100, occupancy: 25});
    this.occupancies.push({ date: '23/01/2019', capacity: 100, occupancy: 39});
    this.occupancies.push({ date: '24/01/2019', capacity: 100, occupancy: 17});
    this.occupancies.push({ date: '25/01/2019', capacity: 100, occupancy: 38});
    this.occupancies.push({ date: '26/01/2019', capacity: 100, occupancy: 88});
    this.occupancies.push({ date: '27/01/2019', capacity: 100, occupancy: 62});
    this.occupancies.push({ date: '28/01/2019', capacity: 100, occupancy: 52});
    this.occupancies.push({ date: '29/01/2019', capacity: 100, occupancy: 44});
    this.occupancies.push({ date: '30/01/2019', capacity: 100, occupancy: 72});
    this.occupancies.push({ date: '31/01/2019', capacity: 100, occupancy: 75});
  }

 /**
  * Initialize xAxis and yAxis objects
  *
  */
  ngOnInit() {
    this.xAxis = {
      rotate:-45,
      ticks: 'auto',
      tickInterval: 2,
    };

    this.yAxis = {
      display: true,
      ticks: { number: 6},
      tickInterval: 20,
    };
  }

   /**
   * Function getDataGridColumns that returns columns for datagrid
   */
    getDataGridColumns() {
      return this.columns;
    }

  /**
   * Function  getLineChartData that display data as a chartlines
   */
    getLineChartData() {
      return this.chartLineData;
    }
}
