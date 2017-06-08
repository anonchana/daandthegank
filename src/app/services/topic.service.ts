import { Injectable } from '@angular/core';

@Injectable()
export class TopicService {

  pathImage = [
    'https://myanimelist.cdn-dena.com/images/anime/9/84460l.jpg',
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
    'http://static.tvtropes.org/pmwiki/pub/images/25ce2156797499ef52e56861021a48b2.jpg',
    'http://img1.ak.crunchyroll.com/i/spire3/cbb55a6382682bf71e91f685c6473c5a1487736090_full.jpg',
    'https://myanimelist.cdn-dena.com/images/anime/10/78745.jpg'
  ];

  topicArray = [{comment: 'eiei',pathImage:this.pathImage[0], newsFeed: '', name: 'DaEtc'}
                  ,{comment: 'oioi',pathImage:this.pathImage[1], newsFeed: '', name: 'TopEtc'}
                  ,{comment: 'aiai',pathImage:this.pathImage[2], newsFeed: '', name: 'NonEtc'}
                  ,{comment: 'aiai',pathImage:this.pathImage[3], newsFeed: '', name: 'TopEtc'}
                  ,{comment: 'aiai',pathImage:this.pathImage[4], newsFeed: '', name: 'DaEtc'}
                  ];

  constructor() { }

}
