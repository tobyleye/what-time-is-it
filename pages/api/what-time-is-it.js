import dayjs from "dayjs";
export default function handler(req, res) {
  const data = dayjs(new Date()).format("hh:mm a").toString();
  res.status(200).json({ data });
}
