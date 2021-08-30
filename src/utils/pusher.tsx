import {pusher} from 'api/pusherConfig';

export const startSocket = async (path) => {
  debugger
    const channel = await pusher.subscribe(path);
    channel.bind('refresh', function (data) {
      return data
    });
}

