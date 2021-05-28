import React, { createContext, useState } from 'react';
import {books_data} from '../database/books';

export const BookContext = createContext(); // Provider ve Consumer'i sağlayacak

const BookContextProvider = ({children}) => {  
    const [books, setBooks] = useState(books_data);

    return (
        <BookContext.Provider value = {{books}}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;






// ------------------ CLASS COMPONENT ILE

// export const BookContext = React.createContext();

// export default class BoookContext extends Component {

//     state = {
//        books : [
//             {
//                 "ISBN": 9789000307975,
//                 "title": "Vrienden voor het leven",
//                 "author": "Maeve Binchy",
//                 "summary": "Vrienden voor het leven is het verhaal van drie vriendinnen die op weg naar volwassenheid verwikkeld raken in een zonderlinge driehoeksverhouding. Benny en Eve, boezemvriendinnen uit het Ierse dorpje Knockglen, gaan in Dublin studeren en sluiten daar al snel vriendschap met de aantrekkelijke en ambitieuze Nan. Het opwindende studentenleven brengt hun echter niet alleen geluk maar ook verdriet. Met haar grote vermogen om menselijke gevoelens herkenbaar neer te zetten weet Maeve Binchy geluk en verdriet, warmte en humor samen te brengen in deze meeslepende roman. Vrienden voor het leven verscheen voor het eerst in 1991 en is het favoriete boek van vele Maeve Binchy-fans. Het boek is inmiddels toe aan de zeventiende druk. In 1995 werd het zeer succesvol verfilmd onder de titel Circle of Friends met Minnie Driver en Chris O’Donnell in de hoofdrollen.",
//                 "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/5/3/6/6/1001004011806635.jpg",
//                 "price": {
//                     "currency": "EUR",
//                     "value": 10,
//                     "displayValue": "10.00"
//                 }
//             },
//         ]
//     }

//     render() {
//         return (
//             <BookContext.Provider value={this.state}>
//                 {this.props.children}
//             </BookContext.Provider>
//         )
//     }
// }
