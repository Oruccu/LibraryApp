import colors from '@/app/styles/Color';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor:colors.green,
    padding:10,
    color:colors.offWhite

  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  closeText: {
    marginTop: 10,
    textAlign: 'right',
  },
});
