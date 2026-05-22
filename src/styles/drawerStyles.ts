import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drawerContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  profileSection: {
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 14,
    borderRadius: 12,
    backgroundColor: '#fff4ef',
    borderWidth: 1,
    borderColor: '#ffd7c8',
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  avatarWrap: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ffb79d',
    padding: 2,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },

  profileTextBlock: {
    flex: 1,
  },

  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  email: {
    marginTop: 3,
    fontSize: 13,
    color: '#6b7280',
  },

  menuSection: {
    marginTop: 4,
  },

  menuLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: 0.2,
    marginBottom: 6,
    marginLeft: 20,
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

  footerSection: {
    marginTop: 'auto',
    paddingTop: 18,
    paddingHorizontal: 16,
  },

  supportButton: {
    borderWidth: 1,
    borderColor: '#ffd7c8',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    gap: 8,
    marginBottom: 10,
  },

  supportText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ff6b35',
  },

  logoutButton: {
    backgroundColor: '#ef4444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    borderRadius: 10,
    gap: 8,
  },

  logoutText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;
