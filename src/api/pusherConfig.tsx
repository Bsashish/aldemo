import Pusher from 'pusher-js/with-encryption';
const PUSHER_KEY = process.env.PUSHER_KEY || '4f34e823fc08f1bad079';
const CLUSTER = process.env.PUSHER_KEY || 'mt1';
export const pusher = new Pusher(PUSHER_KEY, {
  cluster: CLUSTER,
  authEndpoint: `https://origin-services-testing.herokuapp.com/api/pusher/auth/private-encrypted`,
  auth: {
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlV6OXZNaEg3aXdJNU50T2tEN3dYMyJ9.eyJpc3MiOiJodHRwczovL2Rldi05aXlvbDJqMi51cy5hdXRoMC5jb20vIiwic3ViIjoiMzJwOGg4TDNIbExTSDQ4c291dzlIUnRZV3Y0S1J4VzRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vb3JpZ2luc3RvY2tzL2FwaSIsImlhdCI6MTYzMDE5MTI2NiwiZXhwIjoxNjMyNzgzMjY2LCJhenAiOiIzMnA4aDhMM0hsTFNINDhzb3V3OUhSdFlXdjRLUnhXNCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.gVReCOh_v4Qj42H-JpJ1URqkk03BG0HTIX2fwxbOl3Kps7n2wos0CkotKX4YPRirQ3MQAF4jysmGZbm16_EBeSbLQSbXhxq7Y4JGcAc6g3FN9oefVCb_D0apSZcWwsMSIlrmOXuJxKGnnGsV7KAkZU2_5hWSFOxPPWRAm8nIdnz9FJV2ZDkopw_uFynXyJTyMmfbpasI55kiXU2vjJqgRvE3DJLbHNvlzNHLI9FMIpCAPcC_FqBivUm7-IcU2JuZMRbdhurCElo3REw0y7e3y23-vUw0YgdwEwUM7uIyaeJuQy4l-4xdUWwMKpTybvVw8x1hh9Y8U1r10yZEvE_zsQ`,
      Accept: 'application/json',
    },
  },
});
