
  'use strict';

  let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  
  
  
  
  let seattle= {
    minCust:23,
    maxCust:65,
    avgcook:6.3,
    numCusPerHr:[],
    soldbyday:0,
    ranCustNum:function () {
      this.numCusPerHr = randomNum(this.minCust, this.maxCust);
     
    },  
    hrDailySale :function () {
      for (var i=0;i<hours.length;i++){
          var numOfCookies= Math.ceil(seattle.ranCustNum() *seattle.avgcook);
          seattle.numCusPerHr.push(numOfCookies);
          seattle.soldbyday += numOfCookies;
      }
    },
    render :function(){
      var container=document.getElementById('content-area');
      var h2 =document.createElement('h2');
      container.appendChild(h2);
      h2.textContent='Seattle';
      var list=document.createElement('ul');
      container.appendChild(list);
      for (var i=0;i<hours.length;i++){
        this.ranCustNum();
        let perHourCookies = this.numCusPerHr * avgCook;
        listItem.textContent = ${hours[i]}: ${Math.ceil(perHourCookies)}
       list.appendChild(listItem);
      }
      var listItem = document.createElement('li');
       listItem.textContent  ='Total: '+seattle.soldbyday+' cookies';
       list.appendChild(listItem);
  
      }
  }
  
  seattle.numCusPerHr();
  seattle.render();
  
  
  
  
    }
}

Seattle.numCusPerHr();
Seattle.render();









/*let tok= {
  minCust:3,
  maxCust:24,
  avgcook:1.2,
  numCusPerHr:[],
  soldcook:[],
  custNum:function () {
    console.table(this);
    this.numCusPerHr = randomNum(this.minCust, this.maxCust);
  },  
 this.soldcookies;

}









let dub= {
  minCust:11,
  maxCust:38,
  avgcook:3.7,
  numCusPerHr:[],
  soldcook:[],
  custNum:function () {
    console.table(this);
    this.numCusPerHr = randomNum(this.minCust, this.maxCust);
  },  
 this.soldcookies;

}









let seale= {
  minCust:20,
  maxCust:38,
  avgcook:2.3,
  numCusPerHr:[],
  soldcook:[],
  custNum:function () {
    console.table(this);
    this.numCusPerHr = randomNum(this.minCust, this.maxCust);
  },  
 this.soldcookies;

}










let seatle= {
  minCust:2,
  maxCust:16,
  avgcook:4.6,
  numCusPerHr:[],
  soldcook:[],
  custNum:function () {
    console.table(this);
    this.numCusPerHr = randomNum(this.minCust, this.maxCust);
  },  
 this.soldcookies;

}

