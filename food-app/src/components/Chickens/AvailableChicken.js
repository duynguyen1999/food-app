import Card from '../UI/Card';
import ChickensItem from './ChickensItem/ChickensItem';
import classes from './AvailableChicken.module.css';
const CHICKENS = [
  {
    id: 'm1',
    name: 'Chicken bat kinh',
    description: 'Chicken bat kinh',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Chicken ko kinh',
    description: 'Chicken ko kinh!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Chicken hoi kinh',
    description: 'Chicken hoi kinh',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Chicken kinh',
    description: 'Chicken kinh',
    price: 18.99,
  },
];

const AvailableChicken = () => {
  const chickenList = CHICKENS.map(chicken =>
    <ChickensItem 
    key={chicken.id}
    name={chicken.name}
    description={chicken.description}
    price={chicken.price}
    id = {chicken.id}
     />);
  return <section className={classes.meals}>
    <Card>
      <ul>
        {chickenList}
      </ul>
    </Card>
  </section>
};
export default AvailableChicken;