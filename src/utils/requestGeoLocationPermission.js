import {PermissionsAndroid} from 'react-native';

async function requestGeoLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão de acesso InstaTempo ',
        message:
          'InstaTempo precisa de acesso a sua localização' +
          'para mostrar o tempo agora.',
        buttonNeutral: 'Depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Você pode usar a localização');
    } else {
      console.log('Localização negada');
    }
  } catch (err) {
    console.warn(err);
  }
}