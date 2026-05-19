import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
  },

  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  screenTitle: {
    fontSize: 20,
    fontWeight: '600',
  },

  logoutContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },

  logoutButton: {
    backgroundColor: '#ef4444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },

  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;