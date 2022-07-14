import Parse from 'parse';
import {useState} from 'react';


export const createProp = async function(): Promise<boolean> {
  const newPropTitleValue : string = newPropTitle;
  let Prop: Parse.Object = new Parse.Object('Prop');
  Prop.set('title', newPropTitle);
  Prop.set('desc', newPropDesc);
  Prop.set('oddsA', newPropOddsA);
  Prop.set('oddsB', newPropOddsB);
  Prop.set('author', author);
  Prop.set('finished', false);
  try {
    await Prop.save();
    //success
    console.log('Prop saved');
    readProps();
    return true;
  } catch (error: any) {
    // error
    alert (`Error ${error.message}`);
    return false;
    };
};

export const readProps = async function(): Promise<boolean> {
  const parseQuery: Parse.Query = new Parse.Query('Prop');
  try {
    let props: Parse.Object[] = await parseQuery.find();
    return props;
  } catch (error: any) {
    console.log(`Error ${error.message}`);
    return [];
  };
};
