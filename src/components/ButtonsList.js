import { Button } from './Button';

const buttonsList = ['All', 'Tamil Cinema', 'Music', 'Display devices', 'Desks', 'Live', 'iphones', 'podcasts', 'Computer keyboard', 'Gadgets', 'Mixes', 'Algorithms', 'Romantic comedies'];

export const ButtonsList = () => {
  return (
    <div className='p-2 flex h-30'>
      {
        buttonsList.map(buttonName => <Button key={buttonName} name={buttonName}/>)
      }
    </div>
  );
}
