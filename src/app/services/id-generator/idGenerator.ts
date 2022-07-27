export class idGenerator {
  generateId(): number {
    let date = new Date();
    let id =
      String(date.getFullYear()) +
      String(date.getMonth() + 1).padStart(2, '0') +
      String(date.getDate()).padStart(2, '0') +
      String(date.getHours()).padStart(2, '0') +
      String(date.getMinutes()).padStart(2, '0') +
      String(date.getSeconds()).padStart(2, '0') +
      String(date.getMilliseconds()).padStart(3, '0');
      return parseInt(id);
  }
}
