import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY,
  ActionCodeOperation,
  ActionCodeURL,
  Auth,
  AuthCredential,
  AuthInstances,
  AuthModule,
  EmailAuthCredential,
  EmailAuthProvider,
  FacebookAuthProvider,
  FactorId,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthCredential,
  OAuthProvider,
  OperationType,
  PhoneAuthCredential,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  ProviderId,
  RecaptchaVerifier,
  SAMLAuthProvider,
  SignInMethod,
  TotpMultiFactorGenerator,
  TotpSecret,
  TwitterAuthProvider,
  applyActionCode,
  authInstance$,
  authState,
  beforeAuthStateChanged,
  browserLocalPersistence,
  browserPopupRedirectResolver,
  browserSessionPersistence,
  checkActionCode,
  confirmPasswordReset,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  debugErrorMap,
  deleteUser,
  fetchSignInMethodsForEmail,
  getAdditionalUserInfo,
  getAuth,
  getIdToken,
  getIdTokenResult,
  getMultiFactorResolver,
  getRedirectResult,
  idToken,
  inMemoryPersistence,
  indexedDBLocalPersistence,
  initializeAuth,
  initializeRecaptchaConfig,
  isSignInWithEmailLink,
  linkWithCredential,
  linkWithPhoneNumber,
  linkWithPopup,
  linkWithRedirect,
  multiFactor,
  onAuthStateChanged,
  onIdTokenChanged,
  parseActionCodeURL,
  prodErrorMap,
  provideAuth,
  reauthenticateWithCredential,
  reauthenticateWithPhoneNumber,
  reauthenticateWithPopup,
  reauthenticateWithRedirect,
  reload,
  revokeAccessToken,
  sendEmailVerification,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  setPersistence,
  signInAnonymously,
  signInWithCredential,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPhoneNumber,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  unlink,
  updateCurrentUser,
  updateEmail,
  updatePassword,
  updatePhoneNumber,
  updateProfile,
  useDeviceLanguage,
  user,
  validatePassword,
  verifyBeforeUpdateEmail,
  verifyPasswordResetCode
} from "./chunk-GRLTNXQ7.js";
import "./chunk-GYM6T3DH.js";
import "./chunk-NASD4L7L.js";
import "./chunk-INDP74QC.js";
export {
  ActionCodeOperation,
  ActionCodeURL,
  Auth,
  AuthCredential,
  AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY as AuthErrorCodes,
  AuthInstances,
  AuthModule,
  EmailAuthCredential,
  EmailAuthProvider,
  FacebookAuthProvider,
  FactorId,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthCredential,
  OAuthProvider,
  OperationType,
  PhoneAuthCredential,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  ProviderId,
  RecaptchaVerifier,
  SAMLAuthProvider,
  SignInMethod,
  TotpMultiFactorGenerator,
  TotpSecret,
  TwitterAuthProvider,
  applyActionCode,
  authInstance$,
  authState,
  beforeAuthStateChanged,
  browserLocalPersistence,
  browserPopupRedirectResolver,
  browserSessionPersistence,
  checkActionCode,
  confirmPasswordReset,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  debugErrorMap,
  deleteUser,
  fetchSignInMethodsForEmail,
  getAdditionalUserInfo,
  getAuth,
  getIdToken,
  getIdTokenResult,
  getMultiFactorResolver,
  getRedirectResult,
  idToken,
  inMemoryPersistence,
  indexedDBLocalPersistence,
  initializeAuth,
  initializeRecaptchaConfig,
  isSignInWithEmailLink,
  linkWithCredential,
  linkWithPhoneNumber,
  linkWithPopup,
  linkWithRedirect,
  multiFactor,
  onAuthStateChanged,
  onIdTokenChanged,
  parseActionCodeURL,
  prodErrorMap,
  provideAuth,
  reauthenticateWithCredential,
  reauthenticateWithPhoneNumber,
  reauthenticateWithPopup,
  reauthenticateWithRedirect,
  reload,
  revokeAccessToken,
  sendEmailVerification,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  setPersistence,
  signInAnonymously,
  signInWithCredential,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPhoneNumber,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  unlink,
  updateCurrentUser,
  updateEmail,
  updatePassword,
  updatePhoneNumber,
  updateProfile,
  useDeviceLanguage,
  user,
  validatePassword,
  verifyBeforeUpdateEmail,
  verifyPasswordResetCode
};
//# sourceMappingURL=@angular_fire_auth.js.map
