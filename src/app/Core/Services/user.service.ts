import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  myUsers: User[] = [
    { id: 1, user: 'أحمد محمود', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-101', Ticket_Rate: '$40', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 2, user: 'محمد الغريب', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-102', Ticket_Rate: '$30', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 3, user: 'محمد الغريب', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-103', Ticket_Rate: '$45', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 4, user: 'محمد الغريب', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-101', Ticket_Rate: '$54', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 5, user: 'أحمد محمود', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-101', Ticket_Rate: '$40', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 6, user: 'محمد الغريب', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-102', Ticket_Rate: '$30', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 7, user: 'محمد الغريب', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-103', Ticket_Rate: '$45', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 8, user: 'محمد الغريب', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-101', Ticket_Rate: '$54', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 9, user: 'أحمد محمود', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-101', Ticket_Rate: '$40', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 10, user: 'محمد الغريب', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-102', Ticket_Rate: '$30', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 11, user: 'محمد الغريب', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-103', Ticket_Rate: '$45', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
    { id: 12, user: 'محمد الغريب', phoneNumber: '0123456789', image: '../../../assets/img/Image-30.png', Ticket_number: 'C-101', Ticket_Rate: '$54', Cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...', Number_of_people: 1, Number_of_purchases: 'مرة واحدة' },
  ];

  constructor() { }

}
