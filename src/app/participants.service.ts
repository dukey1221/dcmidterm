import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  getParticipants(){
      return [
        {name: "Joana Marie Poquita", age:21 + " years old", gender: "Female"},
        {name: "John Lister Buhayang", age:17 + " years old", gender: "Male"},
        {name: "Jasper Luke", age:22 + " years old", gender: "Male"},
        {name: "Juan Pancho", age:27 + " years old", gender: "Male"},
        {name: "Jessa Luis Gudez", age:21 + " years old", gender: "Female"},
        {name: "Jannise Lobertes", age:30 + " years old", gender: "Male"},
        {name: "Jaive Carl Salazar", age:20 + " years old", gender: "Male"},
        {name: "Jean Perez", age:37 + " years old", gender: "Female"},
        {name: "Jadel Cruz", age:26 + " years old", gender: "Female"},
        {name: "Judas Paquito", age:25 + " years old", gender: "Male"},
        {name: "Jeffrey John Diaz", age:21 + " years old", gender: "Male"},
        ];
  }
}
