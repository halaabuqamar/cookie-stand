
  'use strict';

  let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  
  function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
  }
  
  //lab7

  function Shop (location,minCust,maxCust, avgsale){
    this.location=location;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avgsale=avgsale;

  }

//thats it 




















  let seattle= {
    location:'seattle',
    minCust:23,
    maxCust:65,
    avgsale:6.3,
    cookiesPerHour:[],
    totalDailyCookies:0,
    calcCookiesPerHour:function () {
      for (let i = 0; i < hours.length; i++) {
        let cookiePerHour=Math.floor(
          getRandomNumber(this.minCust,this.maxCust)*this.avgsale
          );
        this.totalDailyCookies+=cookiePerHour;
        this.cookiesPerHour.push(cookiePerHour);
      }
    },
    render :function(){
     this.calcCookiesPerHour();
     const container= document.getElementById('shops');
     console.log(container);
     let articleEl=document.createElement('article');
     container.appendChild(articleEl);
     const h2El=document.createElement('h2');
     articleEl.appendChild(h2El);
     h2El.textContent= this.location;
     const ulEl =document.createElement('ul');
     articleEl.appendChild(ulEl);
     for (let i = 0; i < hours.length; i++) {
       const liEL=document.createElement('li');
       ulEl.appendChild(liEL);
       liEL.textContent =`${hours[i]} : ${this.cookiesPerHour[i]}`;
     }
     const liEL= document.createElement('li');
     ulEl.appendChild(liEL);
     liEL.textContent= `Total ${this.totalDailyCookies}cookies ` ;
    },
  };






  let tokyo= {
    location:'tokyo',
    minCust:3,
    maxCust:24,
    avgsale:1.2,
    cookiesPerHour:[],
    totalDailyCookies:0,
    calcCookiesPerHour:function () {
      for (let i = 0; i < hours.length; i++) {
        let cookiePerHour=Math.floor(
          getRandomNumber(this.minCust,this.maxCust)*this.avgsale
          );
        this.totalDailyCookies+=cookiePerHour;
        this.cookiesPerHour.push(cookiePerHour);
      }
    },
    render :function(){
     this.calcCookiesPerHour();
     const container= document.getElementById('shops');
     let articleEl=document.createElement('article');
     container.appendChild(articleEl);
     const h2El=document.createElement('h2');
     articleEl.appendChild(h2El);
     h2El.textContent= this.location;
     const ulEl =document.createElement('ul');
     articleEl.appendChild(ulEl);
     for (let i = 0; i < hours.length; i++) {
       const liEL=document.createElement('li');
       ulEl.appendChild(liEL);
       liEL.textContent =`${hours[i]} : ${this.cookiesPerHour[i]}`;
     }
     const liEL= document.createElement('li');
     ulEl.appendChild(liEL);
     liEL.textContent= `Total ${this.totalDailyCookies}cookies ` ;
    },
  };


  







  let dubai= {
    location:'dubai',
    minCust:11,
    maxCust:38,
    avgsale:3.7,
    cookiesPerHour:[],
    totalDailyCookies:0,
    calcCookiesPerHour:function () {
      for (let i = 0; i < hours.length; i++) {
        let cookiePerHour=Math.floor(
          getRandomNumber(this.minCust,this.maxCust)*this.avgsale
          );
        this.totalDailyCookies+=cookiePerHour;
        this.cookiesPerHour.push(cookiePerHour);
      }
    },
    render :function(){
     this.calcCookiesPerHour();
     const container= document.getElementById('shops');
     let articleEl=document.createElement('article');
     container.appendChild(articleEl);
     const h2El=document.createElement('h2');
     articleEl.appendChild(h2El);
     h2El.textContent= this.location;
     const ulEl =document.createElement('ul');
     articleEl.appendChild(ulEl);
     for (let i = 0; i < hours.length; i++) {
       const liEL=document.createElement('li');
       ulEl.appendChild(liEL);
       liEL.textContent =`${hours[i]} : ${this.cookiesPerHour[i]}`;
     }
     const liEL= document.createElement('li');
     ulEl.appendChild(liEL);
     liEL.textContent= `Total ${this.totalDailyCookies}cookies ` ;
    },
  };






  let paris= {
    location:'paris',
    minCust:20,
    maxCust:38,
    avgsale:2.3,
    cookiesPerHour:[],
    totalDailyCookies:0,
    calcCookiesPerHour:function () {
      for (let i = 0; i < hours.length; i++) {
        let cookiePerHour=Math.floor(
          getRandomNumber(this.minCust,this.maxCust)*this.avgsale
          );
        this.totalDailyCookies+=cookiePerHour;
        this.cookiesPerHour.push(cookiePerHour);
      }
    },
    render :function(){
     this.calcCookiesPerHour();
     const container= document.getElementById('shops');
     let articleEl=document.createElement('article');
     container.appendChild(articleEl);
     const h2El=document.createElement('h2');
     articleEl.appendChild(h2El);
     h2El.textContent= this.location;
     const ulEl =document.createElement('ul');
     articleEl.appendChild(ulEl);
     for (let i = 0; i < hours.length; i++) {
       const liEL=document.createElement('li');
       ulEl.appendChild(liEL);
       liEL.textContent =`${hours[i]} : ${this.cookiesPerHour[i]}`;
     }
     const liEL= document.createElement('li');
     ulEl.appendChild(liEL);
     liEL.textContent= `Total ${this.totalDailyCookies}cookies ` ;
    },
  };





  let lima= {
    location:'lima',
    minCust:2,
    maxCust:16,
    avgsale:4.6,
    cookiesPerHour:[],
    totalDailyCookies:0,
    calcCookiesPerHour:function () {
      for (let i = 0; i < hours.length; i++) {
        let cookiePerHour=Math.floor(
          getRandomNumber(this.minCust,this.maxCust)*this.avgsale
          );
        this.totalDailyCookies+=cookiePerHour;
        this.cookiesPerHour.push(cookiePerHour);
      }
    },
    render :function(){
     this.calcCookiesPerHour();
     const container= document.getElementById('shops');
     let articleEl=document.createElement('article');
     container.appendChild(articleEl);
     const h2El=document.createElement('h2');
     articleEl.appendChild(h2El);
     h2El.textContent= this.location;
     const ulEl =document.createElement('ul');
     articleEl.appendChild(ulEl);
     for (let i = 0; i < hours.length; i++) {
       const liEL=document.createElement('li');
       ulEl.appendChild(liEL);
       liEL.textContent =`${hours[i]} : ${this.cookiesPerHour[i]}`;
     }
     const liEL= document.createElement('li');
     ulEl.appendChild(liEL);
     liEL.textContent= `Total ${this.totalDailyCookies}cookies ` ;
    },
  };











//call
seattle.render();
tokyo.render();
dubai.render(); 
paris.render();
lima.render();
