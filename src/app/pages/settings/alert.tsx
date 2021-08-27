import AlertSettingComponent from '../../components/AlertSetting';

export const AlertSettings = () => {
  let elements = [
    {
      alertName: 'Pre Market',
      volume: '1000',
      movementThreshold: '5%',
      minimumMovement: '20%',
      id: '1',
    },
    {
      alertName: 'Pre Market',
      volume: '1000',
      movementThreshold: '5%',
      minimumMovement: '20%',
      id: '2',
    },
    {
      alertName: 'Pre Market',
      volume: '1000',
      movementThreshold: '5%',
      minimumMovement: '20%',
      id: '3',
    },
  ];

  return (
    <div className="mx-4">
      {elements.map(item => (
        <AlertSettingComponent element={item} />
      ))}
    </div>
  );
};
