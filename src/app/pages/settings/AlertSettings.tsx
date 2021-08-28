import AlertSettingComponent from '../../components/AlertSetting';

export const AlertSettings = () => {
  let elements = [
    {
      alertName: 'Pre Market',
      volume: '100,000',
      movementThreshold: '5%',
      minimumMovement: '0%',
      id: '1',
    },
    {
      alertName: 'Intraday',
      volume: '500,000',
      movementThreshold: '10%',
      minimumMovement: '20%',
      id: '2',
    },
    {
      alertName: 'Post Market',
      volume: '0',
      movementThreshold: '10%',
      minimumMovement: '0%',
      id: '3',
    },
  ];

  return (
    <div>
      {elements.map(item => (
        <AlertSettingComponent element={item} />
      ))}
    </div>
  );
};
