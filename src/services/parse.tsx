//at services / parse.js
import Parse from 'parse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  initializeParse } from '@parse/react-ssr';

//checking env is browser
//TODO: fix parse .env info


export function ParseStart(){
    const PARSE_APP_ID = 'LJEhKO8Y8aQaDKqEUWudriXSMiF1M3gqGevpsbUB';
    const PARSE_JS_KEY = 'opA1xOKO3VDlfKMyLF1VbSokBkT2y6zBkNQn82e7';
  if (typeof window !== 'undefined') {
    Parse.setAsyncStorage(AsyncStorage);
    Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
    Parse.serverURL = "https://parseapi.back4app.com/";
    Parse.enableLocalDatastore(this);
  }
}

//back4app.com
