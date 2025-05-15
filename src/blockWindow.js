function isWithinBlockedTime() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = hours * 60 + minutes;
  
    const blockedWindows = {
      1: [ [630, 660], [840, 1005], [1200, 1260], [1380, 1439], [0, 450] ],
      2: [ [630, 660], [840, 1005], [1200, 1260], [1380, 1439], [0, 450] ],
      3: [ [630, 660], [840, 1005], [1200, 1260], [1380, 1439], [0, 450] ],
      4: [ [630, 660], [840, 1005], [1200, 1260], [1380, 1439], [0, 450] ],
      5: [ [630, 660], [840, 1005], [1200, 1260], [0, 450], [1200, 1439] ],
      6: [ [0, 540], [810, 1020], [1200, 1439] ],
      0: [ [0, 540], [810, 1020], [1380, 1439] ],
    };
  
    const windows = blockedWindows[day] || [];
    return windows.some(([start, end]) => time >= start && time <= end);
  }
  
  module.exports = isWithinBlockedTime;
  