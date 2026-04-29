import { RtcTokenBuilder, RtcRole } from "agora-access-token";

export default function handler(req, res) {
  const APP_ID = "ec22b65b56c0403aa678ffcd1c6b96eb";
  const APP_CERTIFICATE = "ca9f38041cae49b2923a15f3c13cfb55";

  const { channelName, uid } = req.body;

  const token = RtcTokenBuilder.buildTokenWithUid(
    APP_ID,
    APP_CERTIFICATE,
    channelName,
    uid,
    RtcRole.PUBLISHER,
    Math.floor(Date.now() / 1000) + 3600
  );

  res.status(200).json({ token, appId: APP_ID });
}
