export default function GetDate(요청, 응답) {
  if (요청.method == "GET") {
    const date = new Date();
    응답.status(200).json(date.toLocaleString());
  }
}
