
function showCurrentDate() {
  const date = new Date();
  console.log(
    `Its ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()} now.`
  );
}

const task = () =>
  new Promise(function (resolve, reject) {
    
    const intrvl = setInterval(function () {
      if (new Date().getSeconds() === 20) {
        resolve(20);
        clearInterval(intrvl);
      } else {
        showCurrentDate();
      }
    }, 1000);
  });

async function run() {
  await task();
  console.log("second is 20 now");
}

run();
