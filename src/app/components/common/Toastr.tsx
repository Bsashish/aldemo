import styled from 'styled-components';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default function Toastr({type, message}) {
    let toastProperties:any = null;
    const showToast = type => {
        switch(type) {
            case 'success' : toastProperties = {
                title: 'Success',
                description: message,
              }
              break;
            case 'danger' : toastProperties = {
                title: 'Error',
                description: message,
              }   
        }
    }
    return (
        <div className={`${"p-3 bg-" + toastProperties.type + "my-2 rounded"}`}>
        <Toast>
          <ToastHeader>
            {toastProperties.title}
          </ToastHeader>
          <ToastBody>
            {toastProperties.message}
          </ToastBody>
        </Toast>
      </div>
    )
}

export const ToastrWrapper  = styled.div`

`

