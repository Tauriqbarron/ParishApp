import React from "react"; 
import {FlatList} from 'react-native';
import PostsContainer from "./PostsContatainer";

const[Post,setPost] = useState([
    {name:'Palm Sunday'},
    {name: 'Maundy Thursday'}
]);

// Contains text, date & author
type Postdata = {
    text: string;
    date: string;
    author: string;
};

// The 
const DATA: Postdata [] = [
    {
        text: 'This is Post #1',
        date: '29/03/23',
        author: 'Peter Yung',
    },
    {
        text: 'This is Post #2',
        date: '29/03/23',
        author: 'Peter Yung',
    },
    {
        text: 'This is Post #3',
        date: '29/03/23',
        author: 'Peter Yung',
    },
];

//Written in another component?
const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} />
  );

const BoardContainer = () => {
    return (
        <FlatList
            data ={DATA}
            renderItem ={renderItem}
            keyExtractor={}

        />
            
        
    )
};

export default BoardContainer;

// Change scroll view to Flatlist as a component
// 