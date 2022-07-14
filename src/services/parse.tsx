//at services / parse.js
import Parse from 'parse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  initializeParse } from '@parse/react-ssr';

//checking env is browser
//TODO: fix parse .env info
const parseapp = 'LJEhKO8Y8aQaDKqEUWudriXSMiF1M3gqGevpsbUB';
const parsekey = 'opA1xOKO3VDlfKMyLF1VbSokBkT2y6zBkNQn82e7';
export const ParseStart = () => {
if (typeof window !== 'undefined') {
  Parse.setAsyncStorage(AsyncStorage);
  console.log(process.env.PARSE_APP_ID);
  Parse.initialize(parseapp, parsekey);
  Parse.serverURL = "https://parseapi.back4app.com/";
  Parse.enableLocalDatastore(this);
}
}

//back4app.com
