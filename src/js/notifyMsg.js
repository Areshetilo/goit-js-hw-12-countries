import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, notice, info, success, error } from '@pnotify/core';


const notifyMsg = {
  errorMsg(){
    error({
      title: 'Some Trouble!',
      text: 'This country is not exist!',
      delay: 1500,
    });
  },

  successMsg(){
    success({
      title: 'Success!',
      text: 'Successful search!',
      delay: 1500,
    });
  },
  infoMsg(){
    info({
      title: 'Almost done!',
      text: 'Type more letters',
      delay: 1500,
    });
  }



}


export default notifyMsg;
