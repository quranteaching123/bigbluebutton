import { Meteor } from 'meteor/meteor';
import transferUser from './methods/transferUser';
import toggleLockSettings from './methods/toggleLockSettings';
import toggleWebcamsOnlyForModerator from './methods/toggleWebcamsOnlyForModerator';
import clearRandomlySelectedUser from './methods/clearRandomlySelectedUser';
import changeLayout from './methods/changeLayout';
import setPushLayout from './methods/setPushLayout';

Meteor.methods({
  toggleLockSettings,
  transferUser,
  toggleWebcamsOnlyForModerator,
  clearRandomlySelectedUser,
  changeLayout,
  setPushLayout,
});
