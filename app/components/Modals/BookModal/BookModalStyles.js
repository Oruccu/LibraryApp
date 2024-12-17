import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  dropdown: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 14,
    textAlign: 'left',
  },
});

export default styles;