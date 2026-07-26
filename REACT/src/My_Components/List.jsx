import PropTypes from 'prop-types'

function List(props){

    const category = props.category;
    const itemList = props.items;

    // const fruits = [ { id: 1 ,name: "apple", calories : 95}, 
    //                 {id: 2 ,name: "orange" ,calories: 45}, 
    //                 {id: 3 ,name: "banana", calories: 39},
    //                  {id:4 , name: "coconut", calories: 109}, 
    //                  {id:5 ,name: "pineapple",calories: 78}];

                     //fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL
                     //fruits.sort((a,b) => b.name.localeCompare(a.name));
                     //fruits.sort((a,b) => a.calories - b.calories);//NUMERIC
                     //fruits.sort((a,b) => b.calories - a.calories);//reverse numeric

    //const lowCalFruits = fruits.filter(fruit => fruit.calories<100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories>=100);
    const ListItems = itemList.map(item => <li key={item.id}> 
                        {item.name} : &nbsp; 
                        <b>{item.calories}</b></li>);

    List.proptypes = {
        category : PropTypes.string,
        items : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                   name : PropTypes.string,
                                                   calories: PropTypes.number
        }))

    }

    return (<><h3 className = "list-category">{category}</h3>
            <ul className ="list-items"> {ListItems}</ul></>);
}

export default List