(function generateCalendar() {
  let plusOne = true;
  for (let i = 0; i < 12; i++) {
    let startDate = 1;
    if (i === 7) {
      plusOne = true;
    }
    let endDate = 30 + (plusOne ? 1 : 0);
    if (i === 1) {
      endDate = 28;
    }
    while (startDate < endDate) {
      for (let j = 0; j < 7; j++) {
        process.stdout.write(`${startDate} `);
        if (startDate < endDate) {
          startDate++;
        } else {
          break;
        }
      }
      process.stdout.write("\n");
    }
    plusOne = !plusOne;
	console.log('-----------------')
  }
})();

// Improved calendar printer: prints a tidy month-by-month calendar for a year.
// Usage: call `printCalendar(year)` or run `node calendar.js 2025`.
function printCalendar(year = new Date().getFullYear()) {
  const pad = (n) => (n < 10 ? ' ' + n : '' + n);

  for (let m = 0; m < 12; m++) {
    const first = new Date(year, m, 1);
    const startDay = first.getDay(); // 0 (Sun) - 6 (Sat)
    const daysInMonth = new Date(year, m + 1, 0).getDate();

    let line = '';
    // initial padding for first week
    for (let i = 0; i < startDay; i++) {
      line += '   ';
    }

    for (let d = 1; d <= daysInMonth; d++) {
      line += pad(d) + ' ';
      // if end of week or last day, flush
      if ((startDay + d) % 7 === 0 || d === daysInMonth) {
        console.log(line.trimEnd());
        line = '';
      }
    }

    console.log('-----------------');
  }
}

// If run directly from Node, allow optional year argument: `node calendar.js 2025`.
if (typeof require !== 'undefined' && require.main === module) {
  const arg = process.argv[2];
  const parsed = arg ? Number(arg) : undefined;
  if (arg && Number.isNaN(parsed)) {
    console.error('Invalid year:', arg);
    process.exit(1);
  }
  printCalendar(parsed);
}

/**
 * 1 2 3 4 5 6 7
 * 8 9 10 11 12 13 14
 *
 *
 * 29 30 31
 * 1 2
 */
