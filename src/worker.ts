// worker.js
// 定义worker线程脚本代码
const workercode = () => {
  self.onmessage = function (e) {
    console.log('Message received from main script');
    const workerResult = 'Received from main: ' + e.data;
    console.log('Posting message back to main script');
    self.postMessage(workerResult); // here it's working without self
  };
};
// 把脚本代码转为string
let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

export default worker_script;
