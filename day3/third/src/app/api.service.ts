import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  states=[
    {
      id: 1,
      state: 'Kerala',
      description: 'god own country',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 2,
      state: 'Tamil Nadu',
      description: 'Description for Tamil Nadu',
      images: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      state: 'Karnataka',
      description: 'Description for Karnataka',
      images: 'https://media.istockphoto.com/id/1343698748/photo/ancient-stone-ruins-at-hampi-karnataka-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=pAYa9n9aSw84pMQT2xPqExqduMmGzZvwzsPXL2FvGIk='
    },
    {
      id: 4,
      state: 'Maharashtra',
      description: 'Description for Maharashtra',
      images: 'https://media.istockphoto.com/id/802454608/photo/green-hills-in-western-ghats-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=cKhLxJiW-n6te5LVQa_A6BlQ9H5N-lhM6Wds9g5lsGk='
    },
    {
      id: 5,
      state: 'Gujarat',
      description: 'Description for Gujarat',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 6,
      state: 'Rajasthan',
      description: 'Description for Rajasthan',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 7,
      state: 'Uttar Pradesh',
      description: 'Description for Uttar Pradesh',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 8,
      state: 'Bihar',
      description: 'Description for Bihar',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 9,
      state: 'West Bengal',
      description: 'Description for West Bengal',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 10,
      state: 'Madhya Pradesh',
      description: 'Description for Madhya Pradesh',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 11,
      state: 'Odisha',
      description: 'Description for Odisha',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 12,
      state: 'Punjab',
      description: 'Description for Punjab',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 13,
      state: 'Haryana',
      description: 'Description for Haryana',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 14,
      state: 'Chhattisgarh',
      description: 'Description for Chhattisgarh',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 15,
      state: 'Jharkhand',
      description: 'Description for Jharkhand',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 16,
      state: 'Assam',
      description: 'Description for Assam',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 17,
      state: 'Himachal Pradesh',
      description: 'Description for Himachal Pradesh',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 18,
      state: 'Uttarakhand',
      description: 'Description for Uttarakhand',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 19,
      state: 'Goa',
      description: 'Description for Goa',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 20,
      state: 'Tripura',
      description: 'Description for Tripura',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 21,
      state: 'Meghalaya',
      description: 'Description for Meghalaya',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 22,
      state: 'Manipur',
      description: 'Description for Manipur',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 23,
      state: 'Nagaland',
      description: 'Description for Nagaland',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 24,
      state: 'Arunachal Pradesh',
      description: 'Description for Arunachal Pradesh',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 25,
      state: 'Mizoram',
      description: 'Description for Mizoram',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 26,
      state: 'Sikkim',
      description: 'Description for Sikkim',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 27,
      state: 'Delhi',
      description: 'Description for Delhi',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 28,
      state: 'Telangana',
      description: 'Description for Telangana',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    },
    {
      id: 29,
      state: 'Andhra Pradesh',
      description: 'Description for Andhra Pradesh',
      images: 'https://media.istockphoto.com/id/472560436/photo/houseboat-in-southern-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=J0QsYF5M2-22Vvu72d2wEU_9VdVWReUBsA5ooFizrWo='
    }
  ]
  constructor() { }

  getStates(){
    return this.states;
  }

  getState(id:number){
    return this.states.find((states: { id: number; })=>states.id==id)
  }
}
